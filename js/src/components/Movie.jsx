import { randomNumber } from '../helpers';
import { useEffect, useState, useReducer } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import RandomMovie from './RandomMovie';
import FilmTeaser from './FilmTeaser';
import Watchlist from './Watchlist';

const OMDd = 'https://www.omdbapi.com/?apikey=1d847164';

function getWatchlist() {
  const localStorageWatchlist = JSON.parse(localStorage.getItem('watchlist'));

  return !(localStorageWatchlist === null) ? localStorageWatchlist : [];
}

function getRandomFilmFromWatchlist(watchList, setMovieId) {
  const movie = watchList[randomNumber(watchList.length)];
  setMovieId(movie.id);
}

function useGetFilmFromUserInput(searchUserInput, setResultsUserInput) {
  const debouncedUserInput = useDebouncedValue(searchUserInput, 500);

  useEffect(() => {
    if (debouncedUserInput.length < 2) {
      setResultsUserInput([]);
      return;
    }

    async function fetchMovieWithUserInput() {
      try {
        const response = await fetch(`${OMDd}&s=${debouncedUserInput}`);

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Daten');
        }

        const jsonData = await response.json();

        // console.log(jsonData);
        if (jsonData.Response === 'False') {
          throw new Error(jsonData.Error);
        }

        setResultsUserInput(jsonData.Search);
      } catch (error) {
        console.log(error);
        setResultsUserInput([]);
      }
    }

    fetchMovieWithUserInput();
  }, [debouncedUserInput]);
}

function watchListReducer(watchList, message) {
  const { id, title, type } = message;

  switch (message.action) {
    case 'add':
      return [...watchList, { id, title, type }];
    case 'remove':
      return watchList.filter((watchlist) => watchlist.id !== message.id);
    case 'clear':
      return [];
  }

  throw Error('Unknown action: ' + message.action);
}

export default function Movie({ searchParams, setSearchParams }) {
  const [movieId, setMovieId] = useState();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchUserInput, setSearchUserInput] = useState('');
  const [resultsUserInput, setResultsUserInput] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [watchList, watchListDispatch] = useReducer(
    watchListReducer,
    null,
    getWatchlist
  );

  useEffect(() => {
    if (searchParams.get('fID') !== null) {
      setMovieId(searchParams.get('fID'));
    }

    localStorage.setItem('watchlist', JSON.stringify(watchList));
  }, []);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchList));
  }, [watchList]);

  useEffect(() => {
    if (movieId == null) return;

    async function fetchMovieDetailsFromAPI() {
      try {
        const response = await fetch(`${OMDd}&i=${movieId}`);

        if (!response.ok) {
          throw new Error('Could not load movie data');
        }

        const jsonData = await response.json();

        setMovieDetails(jsonData);

        searchParams.set('fID', movieId);
        setSearchParams(searchParams);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieDetailsFromAPI();
  }, [movieId]);

  useGetFilmFromUserInput(searchUserInput, setResultsUserInput);

  return (
    <div>
      <section className="section--movie">
        <h2>
          <span className="h2--movie">Movie</span>
        </h2>

        {/* search film and add to watchlist */}
        <div className="container">
          <div className="container--input--watchlist">
            <p className="p--inputs">add film to personal watchlist</p>
            <button
              className={`button--watchlist${showWatchlist ? '--show' : ''}`}
              onClick={() => setShowWatchlist(!showWatchlist)}
            ></button>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" hidden>
              title
            </label>
            <input
              id="search"
              type="search"
              value={searchUserInput}
              onChange={(e) => setSearchUserInput(e.target.value)}
              placeholder="search for film..."
              className="movie--input"
            />
          </form>
        </div>

        {showWatchlist && (
          <Watchlist
            watchList={watchList}
            watchListDispatch={watchListDispatch}
            setMovieDetails={setMovieDetails}
          />
        )}

        {!(resultsUserInput.length === 0) && (
          <FilmTeaser
            resultsUserInput={resultsUserInput}
            watchListDispatch={watchListDispatch}
            watchList={watchList}
          />
        )}

        {movieDetails && (
          <RandomMovie
            movieDetails={movieDetails}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        )}

        <div className="button--container">
          {showDetails &&
            (watchList.some((film) => film.id === movieId) ? (
              <button
                className="secondary"
                aria-label={`remove ${movieDetails.Title} from watch list`}
                onClick={() =>
                  watchListDispatch({
                    id: movieId,
                    title: movieDetails.Title,
                    type: movieDetails.Type,
                    action: 'remove',
                  })
                }
              >
                remove
              </button>
            ) : (
              <button
                className="secondary"
                aria-label={`add ${movieDetails.Title} to watch list`}
                onClick={() =>
                  watchListDispatch({
                    id: movieId,
                    title: movieDetails.Title,
                    type: movieDetails.Type,
                    action: 'add',
                  })
                }
              >
                add to watchlist
              </button>
            ))}

          <button
            disabled={watchList.length === 0 ? true : false}
            onClick={() => getRandomFilmFromWatchlist(watchList, setMovieId)}
          >
            {movieDetails === null ? 'get a film' : 'roll again'}
          </button>
        </div>
      </section>
    </div>
  );
}

import movies from '../moviesToWatch';
import { randomNumber } from '../helpers';
import { useEffect, useState } from 'react';
import RandomMovie from './RandomMovie';

const OMDd = 'https://www.omdbapi.com/?apikey=1d847164';

export default function Movie({ searchParams, setSearchParams }) {
  const [movieId, setMovieId] = useState();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    if (searchParams.get('fID') !== null) {
      setMovieId(searchParams.get('fID'));
    }
  }, []);

  function getRandomMovieFromArray() {
    const movieId = movies[randomNumber(movies.length)];
    setMovieId(movieId);
  }

  useEffect(() => {
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

  return (
    <div>
      <section className="section--movie">
        <h2>
          <span className="h2--movie">Movie</span>
        </h2>
        {movieDetails.Title && <RandomMovie movieDetails={movieDetails} />}
        <div className="button--container">
          <button onClick={getRandomMovieFromArray}>
            {movieDetails == 0 ? 'get a film' : 'roll again'}
          </button>
        </div>
      </section>
    </div>
  );
}

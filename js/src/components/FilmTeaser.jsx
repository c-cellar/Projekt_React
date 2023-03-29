function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export default function FilmTeaser({
  resultsUserInput,
  watchListDispatch,
  watchList,
}) {
  return (
    <div className="filmTeaser-wrapper">
      {resultsUserInput.map(({ Title, Poster, Year, imdbID, Type }) => (
        <article className="article--teaser" key={imdbID}>
          {Poster !== 'N/A' ? (
            <img
              className="image--teaser"
              src={Poster}
              alt={`There is no film poster for ${Title}`}
            />
          ) : (
            <p>There is no film poster for: {Title}</p>
          )}
          <h4>
            {Title} ({Year && <time dateTime={Year}>{Year}</time>})
          </h4>
          <div className="button-wrapper">
            {watchList.some((film) => film.id === imdbID) ? (
              <button
                aria-label={`remove ${Title} from watch list`}
                className={'secondary'}
                onClick={() =>
                  watchListDispatch({
                    id: imdbID,
                    title: Title,
                    type: Type,
                    poster: Poster,
                    action: 'remove',
                  })
                }
              >
                remove
              </button>
            ) : (
              <button
                aria-label={`add ${Title} to watch list`}
                className={'primary'}
                onClick={() =>
                  watchListDispatch({
                    id: imdbID,
                    title: Title,
                    type: Type,
                    poster: Poster,
                    action: 'add',
                  })
                }
              >
                add to watchlist
              </button>
            )}
          </div>
        </article>
      ))}
      <button className="button--toTop" onClick={scrollToTop}></button>
    </div>
  );
}

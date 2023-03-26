import bin from '../../../public/img/bin.png';

export default function Watchlist({
  watchList,
  watchListDispatch,
  setMovieDetails,
}) {
  return (
    <div className="container--watchlist">
      <ul className="watchlist--ul">
        {watchList.length > 0 ? (
          watchList.map(({ id, title }) => (
            <li className="watchlist--li" key={id}>
              <h4>{title}</h4>
              <button
                className="button--watchlist--remove"
                onClick={() => watchListDispatch({ id, action: 'remove' })}
              >
                <img className="image--icon" src={bin} alt="trash bin" />
              </button>
            </li>
          ))
        ) : (
          <li className="watchlist--li">
            <h4>watchlist is empty</h4>
          </li>
        )}
      </ul>
      <button
        className="button--clearWatchlist"
        aria-label="clear watchlist"
        onClick={() => {
          watchListDispatch({ action: 'clear' });
          setMovieDetails(null);
        }}
      >
        clear watchlist
      </button>
    </div>
  );
}

export default function Watchlist({ watchList, watchListDispatch }) {
  console.log(watchList);

  return (
    <div className="container">
      <button
        aria-label="clear watchlist"
        onClick={() => watchListDispatch({ id: '', action: 'clear' })}
      >
        clear watchlist
      </button>
    </div>
  );
}

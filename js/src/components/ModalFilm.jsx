export default function ModalFilm({ setModalOpen }) {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <h4>your watchlist is empty.</h4>
        <p>create a watchlist and get a random film.</p>
        <p>
          to create a watchlist, search for a film and add it to the watchlist.
        </p>
        <button onClick={() => setModalOpen((current) => !current)}>X</button>
      </div>
    </div>
  );
}

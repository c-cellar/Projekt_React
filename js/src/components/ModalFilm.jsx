export default function ModalFilm({ setModalOpen }) {
  return (
    <div className="overlay">
      <div className="modalContainer film">
        <p>
          <strong>your watchlist is empty.</strong>
        </p>
        <p>create a watchlist and get a random film.</p>
        <p>
          to create a watchlist, search for a film and add it to the watchlist.
        </p>
        <button onClick={() => setModalOpen((current) => !current)}>X</button>
      </div>
    </div>
  );
}

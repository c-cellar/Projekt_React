export default function ModalFood({ setModalFoodOpen }) {
  return (
    <div className="overlay">
      <div className="modalContainer food">
        <p>
          <strong>Sorry!!</strong>
        </p>
        <p>
          No recipe was found! <br />
          Please change your selections.
        </p>
        <button onClick={() => setModalFoodOpen((current) => !current)}>
          X
        </button>
      </div>
    </div>
  );
}

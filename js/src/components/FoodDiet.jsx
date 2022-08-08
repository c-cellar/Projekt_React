export default function FoodDiet({ setSearchTags }) {
  return (
    <div>
      <p>Select your kind of diet (select none for no diet)</p>
      <label htmlFor="vegan">
        vegan
        <input
          type="checkbox"
          id="vegan"
          value="vegan"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="vegetarian">
        vegetarian
        <input
          type="checkbox"
          id="vegetarian"
          value="vegetarian"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="pescetarian">
        pescetarian
        <input
          type="checkbox"
          id="pescetarian"
          value="pescetarian"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
    </div>
  );
}

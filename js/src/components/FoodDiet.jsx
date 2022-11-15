export default function FoodDiet({ setSearchTags }) {
  return (
    <div className="container container--diet">
      <p className="p--inputs">
        Select your kind of diet (select none for no diet)
      </p>

      <select
        id="selectDiet"
        onChange={(e) => {
          setSearchTags({
            checked: e.currentTarget.willValidate,
            value: e.currentTarget.value,
            type: e.currentTarget.id,
          });
          console.log(e.currentTarget);
        }}
      >
        <option value="">none</option>
        <option value="vegan">vegan</option>
        <option value="vegetarian">vegetarian</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="pescetarian">pescetarian</option>
      </select>
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
      <label htmlFor="lacto ovo vegetarian">
        lacto ovo vegetarian
        <input
          type="checkbox"
          id="lacto ovo vegetarian"
          value="lacto ovo vegetarian"
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

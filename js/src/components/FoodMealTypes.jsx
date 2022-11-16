export default function FoodMealTypes({ setSearchTags }) {
  return (
    <div className="container container--mealTypes">
      <p className="p--inputs">Select a kind of meal</p>
      <select
        id="selectMealType"
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
        <option value="main course">main course</option>
        <option value="side dish">side dish</option>
        <option value="soup">soup</option>
        <option value="salad">salad</option>
        <option value="dessert">dessert</option>
        <option value="fingerfood">fingerfood</option>
        <option value="snack">snack</option>
        <option value="breakfast">breakfast</option>
      </select>

      {/* <label htmlFor="main course">
        <input
          type="checkbox"
          id="main course"
          value="main course"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
        main course
      </label>
      <label htmlFor="side dish">
        side dish
        <input
          type="checkbox"
          id="side dish"
          value="side dish"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="soup">
        soup
        <input
          type="checkbox"
          id="soup"
          value="soup"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="salad">
        salad
        <input
          type="checkbox"
          id="salad"
          value="salad"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="dessert">
        dessert
        <input
          type="checkbox"
          id="dessert"
          value="dessert"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="fingerfood">
        fingerfood
        <input
          type="checkbox"
          id="fingerfood"
          value="fingerfood"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="snack">
        snack
        <input
          type="checkbox"
          id="snack"
          value="snack"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label>
      <label htmlFor="breakfast">
        breakfast
        <input
          type="checkbox"
          id="breakfast"
          value="breakfast"
          onChange={(e) =>
            setSearchTags({
              checked: e.currentTarget.checked,
              value: e.currentTarget.value,
            })
          }
        />
      </label> */}
    </div>
  );
}

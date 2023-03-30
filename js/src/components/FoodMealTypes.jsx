export default function FoodMealTypes({ setSearchTags }) {
  return (
    <div className="container container--mealTypes">
      <p className="p--inputs">
        Select a kind of meal (none for random meal type)
      </p>
      <select
        id="selectMealType"
        onChange={(e) => {
          setSearchTags({
            checked: e.currentTarget.willValidate,
            value: e.currentTarget.value == '' ? null : e.currentTarget.value,
            type: e.currentTarget.id,
          });
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
    </div>
  );
}

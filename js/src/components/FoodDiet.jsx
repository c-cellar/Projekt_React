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
        }}
      >
        <option value="">none</option>
        <option value="vegan">vegan</option>
        <option value="vegetarian">vegetarian</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="pescetarian">pescetarian</option>
      </select>
    </div>
  );
}

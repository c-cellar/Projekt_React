export default function FoodCuisines({ setSearchTags }) {
  return (
    <div className="container container--cuisines">
      <p className="p--inputs">
        Select a preferred cuisine (none for no preference)
      </p>
      <select
        id="selectCuisine"
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
        <option value="african">african</option>
        <option value="american">american</option>
        <option value="british">british</option>
        <option value="cajun">cajun</option>
        <option value="chinese">chinese</option>
        <option value="eastern european">eastern european</option>
        <option value="european">european</option>
        <option value="french">french</option>
        <option value="german">german</option>
        <option value="greek">greek</option>
        <option value="indian">indian</option>
        <option value="italian">italian</option>
        <option value="korean">korean</option>
        <option value="latin american">latin american</option>
        <option value="mediterranean">mediterranean</option>
        <option value="middle eastern">middle eastern</option>
        <option value="southern">southern</option>
        <option value="spanish">spanish</option>
        <option value="thai">thai</option>
        <option value="vietnamese">vietnamese</option>
      </select>
    </div>
  );
}

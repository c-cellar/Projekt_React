import FoodDetails from './FoodDetails';

export default function RandomFood({ recipe }) {
  if (recipe == undefined || recipe.id == undefined) {
    return null;
  }

  const { image, spoonacularSourceUrl } = recipe;

  return (
    <article className="view--randomSelection article--food">
      <div className="picture-recipeLink-container">
        {image && <img className="image--details" src={image} alt="Meal" />}
        {spoonacularSourceUrl && (
          <a href={spoonacularSourceUrl} target="blank">
            Go to recipe
          </a>
        )}
      </div>
      <FoodDetails recipe={recipe} />
    </article>
  );
}

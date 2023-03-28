import FoodDetails from './FoodDetails';

export default function RandomFood({ recipe }) {
  if (recipe == undefined || recipe.id == undefined) {
    return null;
  }

  const { image } = recipe;

  return (
    <article className="view--randomSelection article--food">
      {image && <img className="image--details" src={image} alt="Meal" />}
      <FoodDetails recipe={recipe} />
    </article>
  );
}

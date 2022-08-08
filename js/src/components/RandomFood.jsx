import vegan_icon from '../../../public/img/vegan.png';
import vegetarian_icon from '../../../public/img/vegetarian.png';
import gluten_free_icon from '../../../public/img/gluten_free.png';
import dairy_free_icon from '../../../public/img/dairy_free.png';

export default function RandomFood({ recipe }) {
  const {
    title,
    image,
    extendedIngredients,
    spoonacularSourceUrl,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
  } = recipe;

  return (
    <div>
      <h3>{title}</h3>
      {image && <img className="image--details" src={image} alt="Meal" />}
      <div>
        {vegan && <img className="image--icon" src={vegan_icon} alt="vegan" />}
        {vegetarian && (
          <img className="image--icon" src={vegetarian_icon} alt="vegetarian" />
        )}
        {glutenFree && (
          <img
            className="image--icon"
            src={gluten_free_icon}
            alt="gluten free"
          />
        )}
        {dairyFree && (
          <img className="image--icon" src={dairy_free_icon} alt="dairy free" />
        )}
      </div>
      {title && <h4>Ingrediants</h4>}
      <dl className="dl--food">
        {extendedIngredients &&
          extendedIngredients.map(({ name, id, amount }) => (
            <dt key={[id, amount]}>{name}</dt>
          ))}
      </dl>
      {spoonacularSourceUrl && (
        <a href={spoonacularSourceUrl} target="blank">
          Go to recipe
        </a>
      )}
    </div>
  );
}

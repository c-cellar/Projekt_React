import vegan_icon from '../../../public/img/vegan.png';
import vegetarian_icon from '../../../public/img/vegetarian.png';
import gluten_free_icon from '../../../public/img/gluten_free.png';
import dairy_free_icon from '../../../public/img/dairy_free.png';

export default function FoodDetails({ recipe }) {
  const {
    title,
    extendedIngredients,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    spoonacularSourceUrl,
  } = recipe;

  return (
    <div className="selectionDetails">
      <h3>{title}</h3>
      {title && <h4>Ingrediants</h4>}
      <div className="icons">
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
      <dl className="dl--food">
        {extendedIngredients &&
          extendedIngredients.map(({ name, id, amount }) => (
            <dd key={[id, amount]}>{name}</dd>
          ))}
        <dd>
          <a href={spoonacularSourceUrl} target="blank">
            Go to recipe
          </a>
        </dd>
      </dl>
    </div>
  );
}

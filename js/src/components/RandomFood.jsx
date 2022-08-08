export default function RandomFood({ recipe }) {
  const { title, image, extendedIngredients, spoonacularSourceUrl } = recipe;

  return (
    <div>
      <h3>{title}</h3>
      {image && <img src={image} alt="Meal" />}
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

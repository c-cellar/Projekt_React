export default function CocktailDetails({ drinkDetails }) {
  const { strDrink: cocktailName } = drinkDetails;
  const {
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
  } = drinkDetails;

  return (
    <div className="selectionDetails">
      <h3>{cocktailName}</h3>
      {strIngredient1 && <h4>Ingrediants</h4>}
      <dl className="dl--drinksIngrediants">
        {strIngredient1 && <dt>{strIngredient1}</dt>}
        {strMeasure1 && <dd>{strMeasure1}</dd>}
        {strIngredient2 && <dt>{strIngredient2}</dt>}
        {strMeasure2 && <dd>{strMeasure2}</dd>}
        {strIngredient3 && <dt>{strIngredient3}</dt>}
        {strMeasure3 && <dd>{strMeasure3}</dd>}
        {strIngredient4 && <dt>{strIngredient4}</dt>}
        {strMeasure4 && <dd>{strMeasure4}</dd>}
        {strIngredient5 && <dt>{strIngredient5}</dt>}
        {strMeasure5 && <dd>{strMeasure5}</dd>}
        {strIngredient6 && <dt>{strIngredient6}</dt>}
        {strMeasure6 && <dd>{strMeasure6}</dd>}
        {strIngredient7 && <dt>{strIngredient7}</dt>}
        {strMeasure7 && <dd>{strMeasure7}</dd>}
        {strIngredient8 && <dt>{strIngredient8}</dt>}
        {strMeasure8 && <dd>{strMeasure8}</dd>}
        {strIngredient9 && <dt>{strIngredient9}</dt>}
        {strMeasure9 && <dd>{strMeasure9}</dd>}
        {strIngredient10 && <dt>{strIngredient10}</dt>}
        {strMeasure10 && <dd>{strMeasure10}</dd>}
      </dl>
      <p>{strInstructions}</p>
    </div>
  );
}

import CocktailDetails from './CocktailDetails';

export default function RandomCocktail({ randomDrink, drinkDetails }) {
  const { strDrinkThumb: cocktailPicture } = randomDrink;

  return (
    <article className="view--randomSelection article--cocktail">
      {cocktailPicture && (
        <img className="image--details" src={cocktailPicture} alt="Cocktail" />
      )}
      <CocktailDetails drinkDetails={drinkDetails} randomDrink={randomDrink} />
    </article>
  );
}

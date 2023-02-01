import CocktailDetails from './CocktailDetails';

export default function RandomCocktail({ drinkDetails }) {
  const { strDrinkThumb: cocktailPicture } = drinkDetails;

  return (
    <article className="view--randomSelection article--cocktail">
      {cocktailPicture && (
        <img className="image--details" src={cocktailPicture} alt="Cocktail" />
      )}
      <CocktailDetails drinkDetails={drinkDetails} />
    </article>
  );
}

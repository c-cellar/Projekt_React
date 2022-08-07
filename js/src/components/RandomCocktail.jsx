import CocktailDetails from './CocktailDetails';

export default function RandomCocktail({ randomDrink, drinkDetails }) {
  const { strDrink: cocktailName, strDrinkThumb: cocktailPicture } =
    randomDrink;

  return (
    <article>
      <h3>{cocktailName}</h3>
      {cocktailPicture && <img src={cocktailPicture} alt="Cocktail" />}
      <CocktailDetails drinkDetails={drinkDetails} />
    </article>
  );
}

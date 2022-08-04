import CocktailDetails from './CocktailDetails';

export default function RandomCocktail({ randomDrink, cocktailUrl }) {
  // console.log(randomDrink);
  const {
    strDrink: cocktailName,
    strDrinkThumb: cocktailPicture,
    idDrink,
  } = randomDrink;

  return (
    <article>
      <h3>{cocktailName}</h3>
      <img src={cocktailPicture} alt="Cocktail" />
      <CocktailDetails idDrink={idDrink} cocktailUrl={cocktailUrl} />
    </article>
  );
}

import { useEffect, useState } from 'react';
import RandomCocktail from './RandomCocktail';
import { randomNumber } from '../helpers';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function Cocktail() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState('Ordinary Drink');
  const [randomDrink, setRandomDrink] = useState([]);
  const [drinkDetails, setDrinkDetails] = useState([]);

  // Get the options of non alcoholic, alcoholic or optional alcohol
  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`${cocktailUrl}list.php?c=list`);

        if (!response.ok) {
          throw new Error('Fehler beim Laden der gewählten Cocktails');
        }

        const jsonData = await response.json();
        const drinks = await jsonData.drinks;

        setDrinks(drinks);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDrinks();
  }, []);

  // get one random drink onClick
  function getACocktail() {
    async function fetchDrinksBySelection() {
      try {
        const clearSelection = selectedDrinks.replace(' ', '_');

        const response = await fetch(
          `${cocktailUrl}filter.php?c=${clearSelection}`
        );

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Cocktails');
        }

        const jsonData = await response.json();

        const getRandomNumber = randomNumber(jsonData.drinks.length);

        setRandomDrink(jsonData.drinks[getRandomNumber]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDrinksBySelection();
  }

  // get the random Cocktail by Id for details
  useEffect(() => {
    async function fetchCocktailById() {
      try {
        const response = await fetch(
          `${cocktailUrl}lookup.php?i=${randomDrink.idDrink}`
        );

        if (!response.ok) {
          throw new Error('Details konnten nicht geladen werden');
        }

        const jsonData = await response.json();

        const cocktailDetails = jsonData.drinks[0];
        setDrinkDetails(cocktailDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCocktailById();
  }, [randomDrink]);

  return (
    <div>
      <section className="section--cocktail">
        <h2>
          <span className="h2--cocktail">Drinks</span>
        </h2>
        <div className="container">
          <p className="p--inputs">Choose your kind of drink</p>
          <select
            id="cocktail_category"
            value={selectedDrinks}
            onChange={(e) => setSelectedDrinks(e.currentTarget.value)}
          >
            {drinks.map(({ strCategory }) => (
              <option value={strCategory} key={strCategory}>
                {strCategory}
              </option>
            ))}
          </select>
        </div>
        <RandomCocktail randomDrink={randomDrink} drinkDetails={drinkDetails} />
        <div className="button--container">
          <button onClick={getACocktail}>
            {drinkDetails.length == 0 ? 'get a drink' : 'roll again'}
          </button>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import RandomCocktail from './RandomCocktail';
import { randomNumber } from '../helpers';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function Cocktail() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState('alcoholic');
  const [randomDrink, setRandomDrink] = useState({});

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`${cocktailUrl}list.php?a=list`);

        // console.log(response);
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

  useEffect(() => {
    async function fetchDrinksSelection() {
      try {
        const clearSelection = selectedDrinks.replace(' ', '_');

        const response = await fetch(
          `${cocktailUrl}filter.php?a=${clearSelection}`
        );

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Cocktails');
        }

        const jsonData = await response.json();
        // console.log('Anzahl der Cocktails:' + jsonData.drinks.length);
        const getRandomNumber = randomNumber(jsonData.drinks.length);

        setRandomDrink(jsonData.drinks[getRandomNumber]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDrinksSelection();
  }, [selectedDrinks]);

  return (
    <div>
      <section>
        <h2>Cocktail</h2>
        <label htmlFor="withOrWithout">alcoholic or non alcoholic</label>
        <select
          id="withOrWithout"
          value={selectedDrinks}
          onChange={(e) => setSelectedDrinks(e.currentTarget.value)}
        >
          {drinks.map(({ strAlcoholic }) => (
            <option value={strAlcoholic} key={strAlcoholic}>
              {strAlcoholic}
            </option>
          ))}
        </select>
        <RandomCocktail randomDrink={randomDrink} cocktailUrl={cocktailUrl} />
      </section>
    </div>
  );
}

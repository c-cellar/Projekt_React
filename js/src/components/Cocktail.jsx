import { useEffect, useState } from 'react';
import RandomCocktail from './RandomCocktail';
import { randomNumber } from '../helpers';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function Cocktail() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState('');
  const [randomDrink, setRandomDrink] = useState({});
  const [drinkDetails, setDrinkDetails] = useState({});

  // Get the options of non alcoholic, alcoholic or optional alcohol
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

  // get one random drink onClick
  function getACocktail() {
    async function fetchDrinksBySelection() {
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
        // console.log(jsonData.drinks[0]);
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
        <RandomCocktail randomDrink={randomDrink} drinkDetails={drinkDetails} />
        <button onClick={getACocktail}>get a cocktail</button>
      </section>
    </div>
  );
}

// // get one random drink out of the list of cocktails
// useEffect(() => {
//   async function fetchDrinksBySelection() {
//     try {
//       const clearSelection = selectedDrinks.replace(' ', '_');

//       const response = await fetch(
//         `${cocktailUrl}filter.php?a=${clearSelection}`
//       );

//       if (!response.ok) {
//         throw new Error('Fehler beim Laden der Cocktails');
//       }

//       const jsonData = await response.json();
//       // console.log('Anzahl der Cocktails:' + jsonData.drinks.length);
//       const getRandomNumber = randomNumber(jsonData.drinks.length);

//       setRandomDrink(jsonData.drinks[getRandomNumber]);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchDrinksBySelection();
// }, [selectedDrinks]);

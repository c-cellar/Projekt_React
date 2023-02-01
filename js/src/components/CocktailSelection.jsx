import { useState, useEffect } from 'react';
import { randomNumber } from '../helpers';
import { useSearchParams } from 'react-router-dom';
import RandomCocktail from './RandomCocktail';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function CocktailSelection() {
  const [categories, setCategories] = useState('Ordinary Drink');
  const [drinks, setDrinks] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({});

  const [drinkDetails, setDrinkDetails] = useState([]);

  const drinkId = searchParams.get('drink');

  // Get drinks depending on the selected category
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

        drinkId !== null
          ? getCocktailById(drinkId)
          : console.log('No drinkId passed with URL');
      } catch (error) {
        console.log(error);
      }
    }
    fetchDrinks();
  }, []);

  // get CocktailById
  function getCocktailById(drinkId) {
    async function fetchCocktailById() {
      try {
        const response = await fetch(`${cocktailUrl}lookup.php?i=${drinkId}`);

        if (!response.ok) {
          throw new Error('Details konnten nicht geladen werden');
        }

        const jsonData = await response.json();
        console.log(jsonData);

        const cocktailDetails = await jsonData.drinks[0];
        console.log(cocktailDetails);

        setDrinkDetails(cocktailDetails);
        setCategories(cocktailDetails.strCategory);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCocktailById();
  }

  // get one random drink onClick
  function getACocktail() {
    async function fetchDrinksBySelection() {
      try {
        const clearSelection = categories.replace(' ', '_');

        const response = await fetch(
          `${cocktailUrl}filter.php?c=${clearSelection}`
        );

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Cocktails');
        }

        const jsonData = await response.json();

        const getRandomNumber = randomNumber(jsonData.drinks.length);

        const rolledCocktail = jsonData.drinks[getRandomNumber];

        setSearchParams({ drink: rolledCocktail.idDrink });
      } catch (error) {
        console.log(error);
      }
    }
    fetchDrinksBySelection();
  }

  // get Cocktail by Id for details
  useEffect(() => {
    async function fetchCocktailById() {
      try {
        const response = await fetch(`${cocktailUrl}lookup.php?i=${drinkId}`);

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
  }, [drinkId]);

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
            value={categories}
            onChange={(e) => setCategories(e.currentTarget.value)}
          >
            {drinks.map(({ strCategory }) => (
              <option value={strCategory} key={strCategory}>
                {strCategory}
              </option>
            ))}
          </select>
        </div>

        {drinkDetails.idDrink && (
          <RandomCocktail
            drinkId={drinkId}
            cocktailUrl={cocktailUrl}
            drinkDetails={drinkDetails}
          />
        )}

        <div className="button--container">
          <button onClick={getACocktail}>
            {drinkId === null ? 'get a drink' : 'roll again'}
          </button>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { randomNumber } from '../helpers';
import RandomCocktail from './RandomCocktail';

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function CocktailSelection({ searchParams, setSearchParams }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Ordinary Drink');
  const [drinkDetails, setDrinkDetails] = useState([]);

  const drinkId = searchParams.get('dID');

  // Gets an collection of drinks depending on the selected category
  useEffect(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`${cocktailUrl}list.php?c=list`);

        if (!response.ok) {
          throw new Error('Fehler beim Laden der gewählten Cocktails');
        }

        const jsonData = await response.json();
        const AllCategories = await jsonData.drinks;

        setCategories(AllCategories);

        drinkId !== null
          ? () => {
              fetchCocktailById(drinkId, setDrinkDetails);
              setSelectedCategory(drinkDetails.strCategory);
            }
          : null;
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
        const cleanCategory = selectedCategory.replace(' ', '_');

        const response = await fetch(
          `${cocktailUrl}filter.php?c=${cleanCategory}`
        );

        if (!response.ok) {
          throw new Error('Fehler beim Laden der Cocktails');
        }

        const jsonData = await response.json();

        const getRandomNumber = randomNumber(jsonData.drinks.length);

        const rolledCocktail = jsonData.drinks[getRandomNumber];

        searchParams.set('dID', rolledCocktail.idDrink);
        setSearchParams(searchParams);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDrinksBySelection();
  }

  // get Cocktail by Id for details
  useEffect(() => {
    fetchCocktailById(drinkId, setDrinkDetails, setSelectedCategory);
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.currentTarget.value)}
          >
            {categories.map(({ strCategory }) => (
              <option value={strCategory} key={strCategory}>
                {strCategory}
              </option>
            ))}
          </select>
        </div>

        {drinkDetails.idDrink && <RandomCocktail drinkDetails={drinkDetails} />}

        <div className="button--container">
          <button onClick={getACocktail}>
            {drinkId === null ? 'get a drink' : 'roll again'}
          </button>
        </div>
      </section>
    </div>
  );
}

async function fetchCocktailById(
  drinkId,
  setDrinkDetails,
  setSelectedCategory
) {
  if (drinkId == null) return;

  try {
    const response = await fetch(`${cocktailUrl}lookup.php?i=${drinkId}`);

    if (!response.ok) {
      throw new Error('Details konnten nicht geladen werden');
    }

    const jsonData = await response.json();

    const cocktailDetails = jsonData.drinks[0];

    setDrinkDetails(cocktailDetails);
    setSelectedCategory(cocktailDetails.strCategory);
  } catch (error) {
    console.log(error);
  }
}

import { useState, useReducer } from 'react';
import FoodCuisines from './FoodCuisines';
import FoodDiet from './FoodDiet';
import FoodMealTypes from './FoodMealTypes';
import RandomFood from './RandomFood';

// const apiKey = process.env.NEWS_API_KEY;
// const apiKey = '812d3fb83a5342979f1847b5249ae47c';
// example Url = https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true

// Test Url
// const foodUrl = 'https://api.spoonacular.com/recipes/complexSearch';

const foodUrl =
  'https://api.spoonacular.com/recipes/random?apiKey=812d3fb83a5342979f1847b5249ae47c&number=1&tags=';

export default function Food() {
  const [searchTags, setSearchTags] = useReducer(createSearchTag, []);
  const [recipe, setRecipe] = useState({});

  console.log(searchTags);
  console.log(recipe);

  function fetchQuery() {
    async function fetchRecipe() {
      const query = searchTags.join(',');

      console.log(query);
      try {
        const response = await fetch(`${foodUrl}${query}`);

        console.log(response);
        if (!response.ok) {
          throw new Error('Couldnt load recipe');
        }

        const jsonData = await response.json();
        console.log(jsonData.recipes[0]);

        setRecipe(jsonData.recipes[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipe();
  }

  return (
    <div>
      <section className="section--food">
        <h2>Food</h2>
        {/* Diet */}
        <FoodDiet setSearchTags={setSearchTags} />
        {/* Meal Types */}
        <FoodMealTypes setSearchTags={setSearchTags} />
        {/* Cuisines */}
        <FoodCuisines setSearchTags={setSearchTags} />
        {recipe ? (
          <RandomFood recipe={recipe} />
        ) : (
          <div className="no-recipe--notification">
            <p>
              <strong>Sorry!!</strong> <br /> No recipe was found! Please change
              your selections.
            </p>
          </div>
        )}
        <div>
          <button onClick={fetchQuery}>get a meal</button>
        </div>
      </section>
    </div>
  );
}

function createSearchTag(searchTags, message) {
  switch (message.checked) {
    case true:
      console.log('Wert wird hinzugefügt');
      return [...searchTags, message.value];
    case false:
      console.log('Wert wird aus array entfernt');
      return searchTags.filter((tag) => tag !== message.value);
  }
}

/*  useEffect(() => {
    async function fetchRecipe() {
      const query = searchTags.join(',');

      console.log(query);
      try {
        const response = await fetch(`${foodUrl}${query}`);

        console.log(response);
        if (!response.ok) {
          throw new Error('Couldnt load recipe');
        }

        const jsonData = await response.json();
        console.log(jsonData.recipes[0]);

        setRecipe(jsonData.recipes[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipe();
  }, [searchTags]); */

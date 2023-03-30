import { useState, useReducer, useEffect } from 'react';
import FoodCuisines from './FoodCuisines';
import FoodDiet from './FoodDiet';
import FoodMealTypes from './FoodMealTypes';
import ModalFood from './ModalFood';
import RandomFood from './RandomFood';

// const apiKey = process.env.NEWS_API_KEY;
// const apiKey = '812d3fb83a5342979f1847b5249ae47c';
// example Url = https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true

// Test Url
// const foodUrl = 'https://api.spoonacular.com/recipes/complexSearch';

const foodUrl =
  'https://api.spoonacular.com/recipes/random?apiKey=812d3fb83a5342979f1847b5249ae47c&number=1&tags=';

export default function Food({ searchParams, setSearchParams }) {
  const selections = {
    diet: null,
    mealType: null,
    cuisine: null,
  };

  const [searchTags, setSearchTags] = useReducer(createSearchTag, selections);
  const [recipe, setRecipe] = useState(null);
  const [modalFoodOpen, setModalFoodOpen] = useState(false);

  useEffect(() => {
    async function getRecipeById() {
      if (!searchParams.get('rId')) return;

      const id = searchParams.get('rId');

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=812d3fb83a5342979f1847b5249ae47c&includeNutrition=false`
        );

        if (!response.ok) {
          throw new Error('Could not load recipe');
        }

        const jsonData = await response.json();

        setRecipe(jsonData);
      } catch (error) {
        // console.log;
      }
    }
    getRecipeById();
  }, []);

  function fetchQuery() {
    async function fetchRecipe() {
      const query = Object.values(searchTags).filter(Boolean).join(',');

      try {
        const response = await fetch(`${foodUrl}${query}`);

        if (!response.ok) {
          throw new Error('Could not load recipe');
        }

        const jsonData = await response.json();

        console.log(jsonData.recipes.length);
        if (jsonData.recipes.length <= 0) {
          setModalFoodOpen(true);
          throw new Error('Could not find a single recipe');
        }

        const firstRandomRecipe = await jsonData.recipes[0];

        setRecipe(firstRandomRecipe);
        searchParams.set('rId', firstRandomRecipe.id);
        setSearchParams(searchParams);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipe();
  }

  return (
    <section className="section--food">
      <h2>
        <span className="h2--food">Food</span>
      </h2>
      {/* Diet */}
      <FoodDiet setSearchTags={setSearchTags} />
      {/* Meal Types */}
      <FoodMealTypes setSearchTags={setSearchTags} />
      {/* Cuisines */}
      <FoodCuisines setSearchTags={setSearchTags} />

      <RandomFood recipe={recipe} />

      {modalFoodOpen && <ModalFood setModalFoodOpen={setModalFoodOpen} />}

      <div className="button--container">
        <button onClick={fetchQuery}>
          {!recipe ? 'get a meal' : 'roll again'}
        </button>
      </div>
    </section>
  );
}

function createSearchTag(searchTags, message) {
  const diet = 'selectDiet';
  const mealType = 'selectMealType';
  const cuisine = 'selectCuisine';

  switch (message.type) {
    case diet:
      return { ...searchTags, diet: message.value };
    case mealType:
      return { ...searchTags, mealType: message.value };
    case cuisine:
      return { ...searchTags, cuisine: message.value };
  }
}

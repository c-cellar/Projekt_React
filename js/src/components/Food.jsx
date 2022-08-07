import { useEffect, useState } from 'react';

// const apiKey = process.env.NEWS_API_KEY;
// const apiKey = '812d3fb83a5342979f1847b5249ae47c';
// example Url = https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true

const foodUrl = 'https://api.spoonacular.com/recipes/random?number=1&tags=';
let tags = [];

export default function Food() {
  const [searchTags, setSearchTags] = useState([]);
  const [recipe, setRecipe] = useState({});

  //   useEffect(() => {
  //     async function fetchRecipe() {
  //       try {
  //         const response = await fetch(`${foodUrl}`);

  //         console.log(response);
  //         if (!response.ok) {
  //           throw new Error('Couldnt load recipe');
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     fetchRecipe();
  //   }, []);

  return (
    <div>
      <section className="section--food">
        <h2>Food</h2>
        <p>Select your kind of food</p>
        <label htmlFor="vegan">
          vegan
          <input
            type="checkbox"
            id="vegan"
            value="vegan"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="vegetarian">
          vegetarian
          <input
            type="checkbox"
            id="vegetarian"
            value="vegetarian"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="pescetarian">
          pescetarian
          <input
            type="checkbox"
            id="pescetarian"
            value="pescetarian"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <p>Select your cuisine</p>
        <label htmlFor="african">
          African
          <input
            type="checkbox"
            id="african"
            value="african"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="american">
          American
          <input
            type="checkbox"
            id="american"
            value="american"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="british">
          British
          <input
            type="checkbox"
            id="british"
            value="british"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="cajun">
          Cajun
          <input
            type="checkbox"
            id="cajun"
            value="cajun"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="caribbean">
          Caribbean
          <input
            type="checkbox"
            id="caribbean"
            value="caribbean"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="chinese">
          Chinese
          <input
            type="checkbox"
            id="chinese"
            value="chinese"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="eastern european">
          Eastern European
          <input
            type="checkbox"
            id="eastern european"
            value="eastern european"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="european">
          European
          <input
            type="checkbox"
            id="european"
            value="european"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="french">
          French
          <input
            type="checkbox"
            id="french"
            value="french"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="german">
          German
          <input
            type="checkbox"
            id="german"
            value="german"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="greek">
          Greek
          <input
            type="checkbox"
            id="greek"
            value="greek"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="indian">
          Indian
          <input
            type="checkbox"
            id="indian"
            value="indian"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="italian">
          Italian
          <input
            type="checkbox"
            id="italian"
            value="italian"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="japanese">
          Japanese
          <input
            type="checkbox"
            id="japanese"
            value="japanese"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="jewish">
          Jewish
          <input
            type="checkbox"
            id="jewish"
            value="jewish"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="korean">
          Korean
          <input
            type="checkbox"
            id="korean"
            value="korean"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="latin american">
          Latin American
          <input
            type="checkbox"
            id="latin american"
            value="latin american"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="mediterranean">
          Mediterranean
          <input
            type="checkbox"
            id="mediterranean"
            value="mediterranean"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="mexican">
          Mexican
          <input
            type="checkbox"
            id="mexican"
            value="mexican"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="middle eastern">
          Middle Eastern
          <input
            type="checkbox"
            id="middle eastern"
            value="middle eastern"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="nordic">
          Nordic
          <input
            type="checkbox"
            id="nordic"
            value="nordic"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="southern">
          Southern
          <input
            type="checkbox"
            id="southern"
            value="southern"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="spanish">
          Spanish
          <input
            type="checkbox"
            id="spanish"
            value="spanish"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="thai">
          Thai
          <input
            type="checkbox"
            id="thai"
            value="thai"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <label htmlFor="vietnamese">
          Vietnamese
          <input
            type="checkbox"
            id="vietnamese"
            value="vietnamese"
            onChange={(e) =>
              createSearchTag(e.currentTarget.checked, e.currentTarget.value)
            }
          />
        </label>
        <div>
          <button>get a meal</button>
        </div>
      </section>
    </div>
  );
}

function createSearchTag(checked, value) {
  console.log(checked);
  console.log(value);

  if (checked) {
    tags.push(value);
    console.log(tags);
    return;
  }

  tags = tags.filter((tag) => tag !== value);
  console.log(tags);
  return;
}

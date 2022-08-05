import { useState } from 'react';

// const apiKey = process.env.NEWS_API_KEY;
const apiKey = '812d3fb83a5342979f1847b5249ae47c';

const foodUrl = 'https://spoonacular.com/recipes/complexSearch?';

export default function Food() {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <section className="section--food">
        <h2>Food</h2>
        <p>Select your kind of food</p>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';

export default function CocktailDetails({ idDrink, cocktailUrl }) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    async function fetchCocktailDetails() {
      try {
        const response = await fetch(`${cocktailUrl}lookup.php?i=${idDrink}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCocktailDetails();
  }, []);

  return <div>{(idDrink, cocktailUrl)}</div>;
}

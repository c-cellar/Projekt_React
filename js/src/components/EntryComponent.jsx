import Cocktail from './Cocktail';
import Food from './Food';
import Movie from './Movie';

export default function EntryComponent({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Cocktail />
      <Food />
      <Movie />
    </div>
  );
}

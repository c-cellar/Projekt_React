import Cocktail from './Cocktail';
import Food from './Food';

export default function EntryComponent({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Cocktail />
      <Food />
    </div>
  );
}

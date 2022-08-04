import Cocktail from './Cocktail';

export default function EntryComponent({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Cocktail />
    </div>
  );
}

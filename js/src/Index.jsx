import { Routes, Route } from 'react-router-dom';
import CocktailSelection from './components/CocktailSelection';
import Movie from './components/Movie';

export default function Index({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <Routes>
        <Route path="/">
          <Route path="" element={<CocktailSelection />}></Route>
          <Route path="" element={<Movie />}></Route>
        </Route>
      </Routes>
      {/* <Food />
       */}
    </>
  );
}

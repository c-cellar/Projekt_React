import { Routes, Route, useSearchParams } from 'react-router-dom';
import CocktailSelection from './components/CocktailSelection';
import Movie from './components/Movie';
import Food from './components/Food';

export default function Index({ title }) {
  const [searchParams, setSearchParams] = useSearchParams({});

  return (
    <>
      <h1>{title}</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CocktailSelection
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
              <Food
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
              <Movie
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </>
          }
        />
        <Route />
      </Routes>
    </>
  );
}

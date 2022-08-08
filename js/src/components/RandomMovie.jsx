import { Fragment } from 'react';

export default function RandomMovie({ movieDetails }) {
  const {
    Title,
    Poster,
    Year,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Awards,
    Ratings,
  } = movieDetails;

  console.log(Ratings);
  return (
    <div>
      <h3>{Title}</h3>
      <img className="image--details" src={Poster} alt={`Poster of ${Title}`} />
      <p>{Plot}</p>
      <dl>
        <dt>Year</dt>
        <dd>{Year}</dd>
        <dt>Runtime</dt>
        <dd>{Runtime}</dd>
        <dt>Genre</dt>
        <dd>{Genre}</dd>
        <dt>Director</dt>
        <dd>{Director}</dd>
        <dt>Actors</dt>
        <dd>{Actors}</dd>
        <dt>Awards</dt>
        <dd>{Awards}</dd>
        <dt>Ratings</dt>
        {/* {Ratings.length > 0 && (
          <dl>
            {Ratings.map(({ Source, Value }) => (
              <Fragment key={Source}>
                <dt>{Source}</dt>
                <dd>{Value}</dd>
              </Fragment>
            ))}
          </dl>
        )} */}
      </dl>
    </div>
  );
}

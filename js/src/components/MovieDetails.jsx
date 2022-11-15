import { Fragment } from 'react';

export default function MovieDetails({ movieDetails }) {
  const {
    Title,
    Year,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Awards,
    Ratings,
  } = movieDetails;

  return (
    <div className="selectionDetails">
      <h3>{Title}</h3>
      <p>{Plot}</p>
      <dl className="dl--film">
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
      </dl>
      <dl className="dl--ratings">
        {Ratings.map(({ Source, Value }) => (
          <Fragment key={Source}>
            <dt>{Source}</dt>
            <dd>{Value}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}

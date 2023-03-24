import MovieDetails from './MovieDetails';

export default function RandomMovie({
  movieDetails,
  showDetails,
  setShowDetails,
}) {
  const { Title, Poster } = movieDetails;

  return (
    <article className="view--randomSelection article--movie">
      {Poster && (
        <img
          className="image--details"
          src={Poster}
          alt={`Poster of ${Title}`}
        />
      )}
      <header className="article--movie--header">
        <h3>{Title}</h3>
        <button
          className={`button--details${showDetails ? '--show' : ''}`}
          onClick={() => setShowDetails(!showDetails)}
        ></button>
        {showDetails && <MovieDetails movieDetails={movieDetails} />}
      </header>
    </article>
  );
}

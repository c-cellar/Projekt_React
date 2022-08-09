import MovieDetails from './MovieDetails';

export default function RandomMovie({ movieDetails }) {
  const { Title, Poster } = movieDetails;

  return (
    <article className="view--randomSelection">
      {Poster && (
        <img
          className="image--details"
          src={Poster}
          alt={`Poster of ${Title}`}
        />
      )}
      {Title && <MovieDetails movieDetails={movieDetails} />}
    </article>
  );
}

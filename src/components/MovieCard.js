import { Link } from "react-router-dom";

// MovieCard.js
function MovieCard(props) {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => (
        <div className="col-md-4 col-lg-3 col-sm-6 mb-4" key={movie.id}>
          <div className="card movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="card-img-top"
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                {movie.overview.slice(0, 80)} ...........
              </p>
              <Link to={`movie/${movie.id}`} className="btn btn-primary">
                Movie details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieCard;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const params = useParams();
  const movieId = parseInt(params.movieId);

  async function getMovies() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d"
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const foundMovie = movies.find((movie) => movie.id === movieId);
      setMovie(foundMovie);
    }
  }, [movies, movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-100 d-flex justify-content-center align-items-center p-5">
      <div className="card mb-3">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Release date: {movie.release_date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

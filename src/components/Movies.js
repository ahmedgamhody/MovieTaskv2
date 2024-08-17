import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d"
      )
      .then((data) => setMovies(data.data.results))
      .catch((error) => console.error("Error fetching movies: ", error));
  }, []);
  return (
    <>
      <h1 className="text-center p-3 ">All Movies</h1>
      <div className="container mb-5 ">
        <div className="row">
          <MovieCard movies={movies} />
        </div>
      </div>
    </>
  );
}
export default Movies;

// Home.js
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d"
      )
      .then((data) => setMovies(data.data.results.slice(0, 5)))
      .catch((error) => console.error("Error fetching movies: ", error));
  }, []);

  return (
    <>
      <h1 className="text-center p-3">Movies</h1>
      <div className="container">
        <div className="row">
          <MovieCard movies={movies} />
        </div>
      </div>
      <div className="w-100 text-center p-5 mb-5">
        <Link to={"movies"} type="button" className="btn btn-info">
          Load More Movies
        </Link>
      </div>
    </>
  );
}

export default Home;

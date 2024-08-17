import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route
          path="movie/:movieId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        <Route
          path="movies/movie/:movieId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Favourites from "./components/Favourites";
import { RiMovie2Line } from "react-icons/ri";
import { useSelector } from "react-redux";



function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?s=the%20departed&apikey=a5ef1268"
        );
        if (response.data.Search) {
          setMovies(response.data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(response.data.Error || "NO RESULTS FOUND!");
        }
      } catch (err) {
        console.log(err);
        setError("An error occurred while fetching the data.");
      }
    };
    fetchInitialMovies();

    
  }, []);



  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=a5ef1268`
      );
      if (response.data.Search) {
        setMovies(response.data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(response.data.Error || "No results found.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching data.");
    }
  };

//in movielist

  const handleMovieClick = async (title) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${title}&apikey=90a251ae`
      );
      if (response.data.Response === "True") {
        setSelectedMovie(response.data);
      } else {
        console.error(response.data.Error);
      }
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  // in favourites

  const handleFavoriteMovieClick = async (title) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${title}&apikey=90a251ae`
      );
      if (response.data.Response === "True") {
        setSelectedMovie(response.data);
      } else {
        console.error(response.data.Error);
      }
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };




  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        {/* Header */}
        <header className="bg-gray-800 text-gray-100 py-4 shadow-lg px-6 ">
          <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap">


            <Link to="/" className="flex items-center mb-4">
              <RiMovie2Line className="text-5xl text-orange-600" />    
              <h1 className="text-2xl font-bold italic ml-2 hover:text-orange-500">Movie App</h1>
            </Link>

            <div className="flex-grow flex justify-center mx-6 sm:w-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
            <Link to="/favorites" className="text-white font-semibold hover:text-orange-500">
              Favorites

              
              {favoriteMovies.length > 0 && (
                <span className="bg-orange-600 text-white rounded-full px-2 py-1 text-sm ml-1">
                  {favoriteMovies.length}
                </span>
              )}
            </Link>

          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            {/* Route for Movie List */}
            <Route
              path="/"
              element={
                <>
                  {error && (
                    <p className="text-center text-red-500 font-semibold mt-4">
                      {error}
                    </p>
                  )}
                  <MovieList movies={movies} onMovieClick={handleMovieClick} />
                  {selectedMovie && (
                    <MovieDetails
                      movie={selectedMovie}
                      onClose={() => setSelectedMovie(null)}
                    />
                  )}
                </>
              }
            />

            {/* Route for Favorites */}
            <Route path="/favorites" element={
              <>
               <Favourites onMovieClick = {handleFavoriteMovieClick} />
               {selectedMovie && (<MovieDetails movie = {selectedMovie} onClose={()=> setSelectedMovie(null)}
               />)}
              </>
              
             } />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-2 text-center">
          &copy; 2025 Movie App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;

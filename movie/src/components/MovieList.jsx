import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "./redux/favouriteSlice"; 

function MovieList({ movies, onMovieClick }) 
{
    // fav

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);

  const toggleFavorite = (movie) => {

    const isFavorite = favoriteMovies.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => {
        
        const isFavorite = favoriteMovies.some((fav) => fav.imdbID === movie.imdbID);
        
        return (
          <div
            key={movie.imdbID}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            onClick={() => onMovieClick(movie)}
          >
            <img
              src=  {movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "defaultimage.jpg"}
              alt={movie.Title}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => onMovieClick(movie.Title)}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-100">{movie.Title}</h2>
              <div className="flex justify-between mt-3">
                <div>
                <p className="text-sm text-gray-400">{movie.Year}</p>
                </div>

                <div className="cursor-pointer " onClick={() => toggleFavorite(movie)}>
                  {isFavorite ? (
                    <FaHeart className="text-2xl text-orange-600" />
                  ) : (
                    <FiHeart className="text-2xl text-gray-300 hover:text-red-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;

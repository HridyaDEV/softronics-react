import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "./redux/favouriteSlice";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

function Favorites ({onMovieClick}) {
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies); // Get favorite movies from Redux
  const dispatch = useDispatch();

  const toggleFavorite = (movie) => {
    const isFavorite = favoriteMovies.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };




 

 

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">My Favorites</h1>
      {favoriteMovies.length === 0 ? (
        <p className="text-gray-400">No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 "
            >
              <img
                src= {movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "defaultimage.jpg"}
                alt={movie.Title}
                className="w-full h-56 object-cover"
                onClick={()=> onMovieClick(movie.Title)}
              
              />
              <div className="p-4 ">
                <h2 className="text-lg font-bold text-gray-100">{movie.Title}</h2>
                
              
                <div
                  className="cursor-pointer flex justify-between items-center "
                  onClick={() => toggleFavorite(movie)}
                >
                    <p className="text-sm text-gray-400">{movie.Year}</p>
                  {favoriteMovies.some((fav) => fav.imdbID === movie.imdbID) ? (
                    <FaHeart className="text-2xl text-red-500" />
                  ) : (
                    <FiHeart className="text-2xl text-gray-300 hover:text-red-500" />
                  )}
                </div>
              </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

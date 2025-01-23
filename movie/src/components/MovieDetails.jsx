import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { addFavorite, removeFavorite } from "./redux/favouriteSlice";

function MovieDetails({ movie, onClose }) {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);
  const isFavorite = favoriteMovies.some((fav) => fav.imdbID === movie.imdbID);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-2xl w-11/12 max-w-5xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/3 w-full">
            <img
              src= {movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "defaultimage.jpg"}
              alt={movie.Title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Details */}
          <div className="p-6 text-gray-100 flex-1">
            <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <p>
                <span className="font-semibold text-gray-400">Year:</span> {movie.Year}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Genre:</span> {movie.Genre}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Language:</span> {movie.Language}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Director:</span> {movie.Director}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Actors:</span> {movie.Actors}
              </p>

              <p>
                <span className="font-semibold text-gray-400">Awards:</span> {movie.Awards}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Country:</span> {movie.Country}
              </p>
            </div>
            {/* <p className="mb-4">
              <span className="font-semibold text-gray-400">Plot:</span> {movie.Plot}
            </p> */}
            <h3 className="font-bold text-gray-400">Plot:</h3>
            <p>{movie.Plot}</p>
            <p>
              <span className="font-semibold text-gray-400 mt-2">IMDB Rating: </span>{" "}
              <span className="text-yellow-500 font-bold">{movie.imdbRating}</span>
            </p>
            <div className="mt-4 flex justify-between items-center gap-4">
              
              <div className="cursor-pointer  " onClick={toggleFavorite}>
                {isFavorite ? (
                  <FaHeart className="text-2xl text-orange-600" />
                ) : (
                  <FiHeart className="text-2xl text-gray-300 hover:text-red-500" />
                )}
              </div>
              <button
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

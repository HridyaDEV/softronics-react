import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteMovies: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.favoriteMovies.some((fav) => fav.imdbID === movie.imdbID)) {
        state.favoriteMovies.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const movieId = action.payload;
      state.favoriteMovies = state.favoriteMovies.filter(
        (fav) => fav.imdbID !== movieId
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

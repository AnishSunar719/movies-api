import { createSlice } from "@reduxjs/toolkit";

const movieReducer = createSlice({
	name: "movie",
	initialState: {
		searchedMovies: JSON.parse(sessionStorage.getItem("searchedMovies")) || [],
		singleMovie: JSON.parse(sessionStorage.getItem("singleMovie")) || "",
	},
	reducers: {
		getMovie(state, action) {
			try {
				const mov = action.payload;
				const exists = state.searchedMovies.find(
					(movie) => movie.imdbID === mov.Search.imdbID
				);
				if (exists) {
					state.searchedMovies = state.searchedMovies;
				} else {
					state.searchedMovies = mov.Search;
					const saveState = JSON.stringify(state.searchedMovies);
					sessionStorage.removeItem("searchedMovies");
					sessionStorage.setItem("searchedMovies", saveState);
				}
			} catch (error) {
				return error;
			}
		},
		getSingleMovie(state, action) {
			try {
				const mov = action.payload;
				state.singleMovie = ({
					imdbID: mov.imdbID,
					actors: mov.Actors,
					country: mov.Country,
					director: mov.Director,
					genre: mov.Genre,
					plot: mov.Plot,
					poster: mov.Poster,
					title: mov.Title,
					runtime: mov.Runtime,
					boxoffice: mov.BoxOffice,
					type: mov.Type,
					year: mov.Year,
					ratings: mov.imdbRating,
					votes: mov.imdbVotes,
				})
				const saveState = JSON.stringify(state.singleMovie);
				sessionStorage.removeItem("singleMovie");
				sessionStorage.setItem("singleMovie", saveState);
			} catch (error) {
				return error;
			}
		},
	},
});

export default movieReducer.reducer;
export const { getMovie, getSingleMovie } = movieReducer.actions;

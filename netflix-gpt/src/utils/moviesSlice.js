import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlyingMovies: null,
        // trailerVedio:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // state.nowPlyingMovies = action.payload;
               const movies = { ...state}
               movies.nowPlyingMovies = action.payload;
               return movies;
        //    return {nowPlyingMovies: action.payload} = state;
        },
        // addPopularMovies: (state, action) => {
        //     // state.nowPlyingMovies = action.payload;
        //        const movies = { ...state}
        //        movies.popularMovies = action.payload;
        //        return movies;
         addPopularMovies: (state, action) => {
             state.popularMovies = action.payload;        
          },
        addTrailerVideo: (state, action) => {
          state.trailerVedio = action.payload;        
        },
    },
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
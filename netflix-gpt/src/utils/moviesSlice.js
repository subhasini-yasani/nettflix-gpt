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
        addTrailerVideo: (state, action) => {
          state.trailerVedio = action.payload;        
        },
    },
});
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
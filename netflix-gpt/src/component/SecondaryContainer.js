import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className='-mt-52 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlyingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlyingMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlyingMovies} />
      <MovieList title={"popular"} movies={movies.popularMovies} />
      <MovieList title={"upcoming Movies"} movies={movies.nowPlyingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlyingMovies} />
      </div>
      {/* 
      movieList - popular
      MovieList* n
      MovieList - now Playing
      MovieList - Trending
      MovieList - Trending */}
    </div>
  );
};

export default SecondaryContainer;

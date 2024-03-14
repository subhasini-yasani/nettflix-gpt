import React from 'react'
import { useSelector } from 'react-redux'
 import MovieList from './MovieList';

const GptMovieSuggetions = () => {
      const {movieNames, movieResults} = useSelector((store) => store.gpt);
     if(!movieNames) return null;
  return (
    <div className='p-4 m-4 text-white bg-black bg-opacity-90'>
        
          <div>
        {movieNames.map((movieName,index) => (
            <MovieList
            key={movieName} 
            title={movieName}
         movies={ movieResults[index]}/>
         ))}
            
          <MovieList title={ movieNames[0]} movies={movieResults[0]} />
          </div> 
         
    </div>
  )
}

export default GptMovieSuggetions;

import React from 'react'
import { useSelector } from 'react-redux';
import VedioBackground from './VedioBackground';
import VedioTitle from './VedioTitle';

const MainContainer = () => {
     const movies = useSelector((store)=> store.movies?.nowPlyingMovies);
     const moviess = useSelector((store)=> store);

     console.log(moviess)
       if (!movies) return;
        const mainMovie = movies[17];
       console.log(mainMovie);

      const {original_title, overview, id } = mainMovie;
    
      
    return (
    <div>
     <VedioTitle title={original_title} overview={overview}/> 
    
     <VedioBackground movieId={id}/>
     </div>
     );
};

export default MainContainer;

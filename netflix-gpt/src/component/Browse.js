

import useNowPlayingMovies from '../hooks/useNowPlayingmovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
// import MainContainer from './MainContainer';
 
import MainContainer from "./MainContainer";
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* <SecondaryContainer /> */}
       {/* MainContainer   
      -  videoiBachkground
      -  vidioTitle 
      secondary container
      - moveList
      - card */}
      
    </div>
  )
}

export default Browse;

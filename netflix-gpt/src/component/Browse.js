

import useNowPlayingMovies from '../hooks/useNowPlayingmovies';
import Header from './Header';
// import MainContainer from './MainContainer';
 
import MainContainer from "./MainContainer";
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  
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

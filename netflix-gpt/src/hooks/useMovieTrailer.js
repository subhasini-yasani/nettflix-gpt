
  import { useDispatch, useSelector } from "react-redux";
  import { API_OPTIONS } from "../utils/constants";
  import { addTrailerVideo } from "../utils/moviesSlice"
  import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  const trailerVedio = useSelector ((store) => store.movies.trailerVedio);
  // fech trailewr video & updating the store with trailer vedio data
   const getMovieVideos = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',
     API_OPTIONS)
     const json= await data.json();                                                                                                                                                                                                                                                                                                                
    console.log(json);

    const filterData =json.results.filter((Video) => Video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  };
  useEffect(() => {
   !trailerVedio && getMovieVideos();
  }, []);
};
  

export default useMovieTrailer;

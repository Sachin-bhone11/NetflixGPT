import { useDispatch, useSelector } from "react-redux";
import { addNowPlayinMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  //get movies
  const getNowPlayingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const moviesResponse = await fetch(url, API_OPTIONS);
    const moviesResponseJson = await moviesResponse?.json();
    dispatch(addNowPlayinMovies(moviesResponseJson?.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;

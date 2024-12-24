import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  //get movies
  const getPopularMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const popularMoviesResponse = await fetch(url, API_OPTIONS);
    const popularMoviesResponseJson = await popularMoviesResponse?.json();
    dispatch(addPopularMovies(popularMoviesResponseJson?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

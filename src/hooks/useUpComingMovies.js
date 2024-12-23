import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upcomingMovieRes);
  //get movies
  const getUpcomingMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const upcomingMovieRes = await fetch(url, API_OPTIONS);
    const upcomingMovieResjson = await upcomingMovieRes?.json();
    dispatch(addUpComingMovies(upcomingMovieResjson?.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;

import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video and updating the store with trailer video data
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const getVideoDetail = await fetch(url, API_OPTIONS);
    const videoResponse = await getVideoDetail.json();

    if (!videoResponse.results || videoResponse.results.length === 0) {
      return;
    }
    const filterData = videoResponse.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData?.length
      ? filterData[0]
      : videoResponse.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

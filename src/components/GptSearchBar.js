import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovie } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store?.config?.lang);
  const searchtext = useRef(null);

  // search movie in TMDB
  const handleGptSearchClick = async () => {
    const searchMovieTMDB = async (movie) => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;

      try {
        const response = await fetch(url, API_OPTIONS);
        if (!response.ok) {
          throw new Error(`Failed to fetch movie data for: ${movie}`);
        }

        const json = await response.json();
        const data = json.results;
        dispatch(addSearchMovie(data));
        console.log("Search Results:", data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const movieName = searchtext.current.value.trim();
    if (movieName) {
      await searchMovieTMDB(movieName);
    } else {
      alert("Please enter a movie name to search!");
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchtext}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

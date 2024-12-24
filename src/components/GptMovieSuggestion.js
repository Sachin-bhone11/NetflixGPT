import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const GptMovieSuggestion = () => {
  const storeMovie = useSelector((store) => store.gpt.searchMovie);
  console.log(storeMovie);

  // If there are no movies in the store, return null or a loading message
  if (!storeMovie || storeMovie.length === 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {storeMovie.map((movie) => (
        <div
          key={movie?.id}
          className="bg-black text-white p-4 rounded-lg w-1/4 bg-opacity-90"
        >
          <h3 className="mt-4 text-xl font-semibold">{movie.title}</h3>
          <img
            src={IMG_CDN_URL + movie?.poster_path} // Replace with your default image URL if needed
            alt={movie?.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;

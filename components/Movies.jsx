import Image from "next/image";
import React from "react";

const Movies = ({ title, movies }) => {
  return (
    <div className="my-8">
      <div className="text-2xl font-bold uppercase mx-8">{title}</div>
      <div className="flex overflow-x-auto mt-4 p-4">
        {movies?.map((movie) => (
          <img
            className="m-2 w-40"
            key={movie.id}
            alt={movie.name}
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;

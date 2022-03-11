import React from "react";

const Hero = ({ movie }) => {
  console.log(movie);
  return (
    <div className="pb-8 relative">
      <div className="px-8 bg-black bg-opacity-40 absolute bottom-0 left-0 z-10 flex flex-col py-96">
        <div className="text-5xl font-bold mb-4 text-white ">
          {movie?.original_title}
        </div>
        <div className="font-medium text-white text-sm md:text-lg mb-4 max-w-md leading-tight">
          {movie?.overview}
        </div>
        <div className="cursor-pointer font-bold rounded px-8 py-2 mb-8 shadow-lg text-white bg-red-600 hover:bg-red-700">
          PLAY NOW
        </div>
        <div className="cursor-pointer font-bold rounded px-8 py-2 mb-8 shadow-lg text-white bg-slate-600 hover:bg-slate-700">
          WATCH TRAILER
        </div>
      </div>
      <div className="relative">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

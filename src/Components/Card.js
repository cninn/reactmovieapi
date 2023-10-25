import "../Tailwind.css";
import React from "react";


const Card = (props) => {



  return (
    <div className="flex gap-3 pt-5 w-full flex-wrap justify-center">
      {props.movies.map((movie) => (
        <div
          className="rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          key={movie.id}
        >
          <div className="relative lg:w-[330px] md:w-[400px] mx-4 mt-4 lg:h-[400px] md:h-[300px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              className="lg:h-[400px] md:h-[300px]  object-cover w-full"
              alt="..."
            />
          </div>
          <div className="p-4 h-25">
            <div className="mb-1 flex items-center justify-between">
              <p className="block font-sans font-bold leading-relaxed text-blue-gray-900 antialiased text-medium">
                {movie.title.substring(0, 25) + "..."}
              </p>
              <p className="block font-sans font-semibold  text-black bg-[#f48c06] px-3 py-1 rounded-3xl opacity-75">
                {`IMDB :${movie.vote_average}`}
              </p>
            </div>
            <p className="flex flex-wrap lg:w-72 md:w-full font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {movie.overview.substring(0, 80) + "..."}
            </p>
          </div>
          <div className="w-full p-2  flex justify-between">
          <button onClick={(event)=>props.deleteProps(movie)} className="px-3 py-1 rounded-xl w-32 bg-red-800 text-white text-opacity-75 hover:bg-red-500 hover:scale-105 transition-all">Delete</button>
            <button className="px-3 py-1 rounded-xl w-32 bg-slate-800 text-white text-opacity-75 hover:bg-gray-700 hover:scale-105 transition-all">
              Filmi İzle
            </button>
          
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;

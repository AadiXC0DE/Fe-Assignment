"use client";
import { useQuery } from "react-query";
import { useState } from "react";
import Navbar from "../components/Navbar";
import WithAuth from "../components/WithAuth";

//fetching movies

const fetchMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=9b8a90e0e9902453fe79a190f4b57736&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  return res.json();
};

function Dashboard() {
  const { data, isLoading, error } = useQuery("movies", fetchMovies);
  const [movies, setMovies] = useState([]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="bg-black bg-center bg-no-repeat overflow-x-hidden">
      <div className="w-screen flex justify-center mt-6">
        <Navbar />
      </div>
      <div className="container">
        <h1 className="text-4xl font-bold text-center my-8">Popular Movies</h1>
        <div className="grid grid-cols-4 gap-4">
          {data.results.map((movie) => (
            <div key={movie.id} className="flex flex-col items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-48 rounded-lg"
              />
              <h2 className="text-lg font-medium text-center mt-2">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default WithAuth(Dashboard);

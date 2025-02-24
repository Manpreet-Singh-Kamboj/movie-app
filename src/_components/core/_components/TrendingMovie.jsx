import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import Genres from "./Genres";
import Button from "./Button";
import { ChevronRightCircleIcon, CirclePlayIcon } from "lucide-react";

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  const [randomTrendingMovie, setRandomTrendingMovie] = useState({});
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/week?language=en-US`);
      if (data.results.length > 0) {
        const movieResults = data.results.slice(0, 10);
        setMovies((prevState) => [...prevState, ...movieResults]);
        setRandomTrendingMovie(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
      }
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };
  const refreshMovies = () => {
    if (movies.length === 0) {
      fetchMovies();
    } else {
      setMovies([]);
      fetchMovies();
    }
  };
  useEffect(() => {
    refreshMovies();
  }, []);

  return (
    <div className="text-white flex flex-col w-full h-full">
      <div className="relative w-full h-[80%] max-h-[80vh] overflow-hidden">
        {randomTrendingMovie ? (
          <div className="w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original${
                randomTrendingMovie.backdrop_path ||
                randomTrendingMovie.poster_path
              }`}
              alt={
                randomTrendingMovie.title || randomTrendingMovie.original_title
              }
              width="100%"
              height="50%"
              className="w-full h-full object-cover object-center aspect-video"
            />
            <div className="flex flex-col gap-3 max-w-[50%] absolute bg-[#00000096] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-4 rounded-2xl">
              {randomTrendingMovie.adult && (
                <p className="absolute right-[-4%] top-[-12%] bg-red-500 rounded-full py-1 px-1 text-center">
                  18+
                </p>
              )}
              <h2 className="text-white text-center text-lg font-bold">
                {randomTrendingMovie.title ||
                  randomTrendingMovie.original_title}
              </h2>
              {randomTrendingMovie.genre_ids && (
                <Genres movieGenres={randomTrendingMovie.genre_ids} />
              )}
              {randomTrendingMovie.overview && (
                <p className="text-sm text-center text-gray-300">
                  {`${randomTrendingMovie.overview.slice(0, 100)}...`}
                </p>
              )}
              <div className="flex gap-3 justify-center items-center flex-col md:flex-row">
                <Button
                  onClick={() => {}}
                  placeholder={"Watch Now"}
                  icon={<CirclePlayIcon />}
                  classnames={"bg-white"}
                ></Button>
                <Button
                  onClick={() => {}}
                  placeholder={"More Info"}
                  icon={<ChevronRightCircleIcon />}
                  classnames={
                    "bg-[rgba(255,255,255,0.4)] backdrop-blur text-white"
                  }
                ></Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TrendingMovie;

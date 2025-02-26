import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import TrendingMovie from "./_components/TrendingMovie";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setGenres } from "../../store/slices/GenreSlice";
import MovieScroller from "./_components/MovieScroller";

const Home = () => {
  const dispatch = useDispatch();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [randomTrendingMovie, setRandomTrendingMovie] = useState({});
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const responses = await Promise.all([
        axios.get(`/trending/movie/week?language=en-US`),
        axios.get(`/discover/movie?language=en-US`),
      ]);
      if (responses[0].data.results.length > 0) {
        const movieResults = responses[0].data.results.slice(0, 10);
        setTrendingMovies(movieResults);
        setRandomTrendingMovie(
          responses[0].data.results[
            Math.floor(Math.random() * responses[0].data.results.length)
          ]
        );
      }
      if (responses[1].data.results.length > 0) {
        const movieResults = responses[1].data.results.slice(10, 20);
        setDiscoverMovies(movieResults);
      }
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };
  const refreshMovies = () => {
    if (trendingMovies.length === 0 || discoverMovies.length === 0) {
      fetchMovies();
    } else {
      setTrendingMovies([]);
      setDiscoverMovies([]);
      fetchMovies();
    }
  };
  useEffect(() => {
    refreshMovies();
  }, []);

  useEffect(() => {
    (async function fetchGenres() {
      try {
        const { data } = await axios.get(`/genre/movie/list`);
        dispatch(setGenres(data.genres));
      } catch (error) {
        console.log("Error while fetching genres: ", error);
      }
    })();
  }, []);
  return (
    <div className="relative w-screen h-screen bg-black flex flex-col">
      <Header />
      <div className="relative flex w-full overflow-y-auto">
        <Sidebar />
        <div className="w-full sm:w-[70%] md:w-[75%] flex-1 overflow-y-scroll">
          <TrendingMovie movie={randomTrendingMovie} />
          <div className="px-4 md:px-6">
          <MovieScroller
            title="Trending 🔥"
            movies={trendingMovies}
            path="/trending"
          />
          <MovieScroller
            title="Discover 🎥"
            movies={discoverMovies}
            path="/discover"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../common/Header";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Card from "./_components/Card";
import Loader from "../common/Loader";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const fetchTrendingMovies = async () => {
    try {
      const { data } = await axios.get(
        `/trending/movie/day?language=en-US&page=${page}`
      );
      if (data.results.length > 0) {
        const movieResults = data.results.slice(0, 10);
        setTrendingMovies((prev) => [...prev, ...movieResults]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };
  const refreshMovies = () => {
    if (trendingMovies.length === 0) {
      fetchTrendingMovies();
    } else {
      setTrendingMovies([]);
      setPage(1);
      fetchTrendingMovies();
    }
  };

  useEffect(() => {
    refreshMovies();
  }, []);

  return (
    <div className="bg-black w-screen min-h-screen flex flex-col gap-7">
      <Header />
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="sticky top-[6%] md:top-[7%] left-0 bg-black text-white flex gap-2 items-center py-3 px-2 z-5 text-xl"
      >
        <ChevronLeft />
        <p className="font-normal">Go Back</p>
      </button>
      <InfiniteScroll
        next={fetchTrendingMovies}
        loader={<Loader />}
        dataLength={trendingMovies.length}
        hasMore={hasMore}
      >
        <Card movies={trendingMovies} />
      </InfiniteScroll>
    </div>
  );
};

export default Trending;

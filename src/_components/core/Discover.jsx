import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../common/Header";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Card from "./_components/Card";
import Loader from "../common/Loader";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const fetchDiscoverMovies = async () => {
    try {
      const { data } = await axios.get(
        `/discover/movie?language=en-US&page=${page}`
      );
      if (data.results.length > 0) {
        const movieResults = data.results.slice(0, 10);
        setDiscoverMovies((prev) => [...prev, ...movieResults]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };
  const refreshMovies = () => {
    if (discoverMovies.length === 0) {
      fetchDiscoverMovies();
    } else {
      setDiscoverMovies([]);
      setPage(1);
      fetchDiscoverMovies();
    }
  };

  useEffect(() => {
    refreshMovies();
  }, []);

  return (
    <div className="relative bg-black w-screen min-h-screen flex flex-col gap-7">
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
        next={fetchDiscoverMovies}
        loader={<Loader />}
        dataLength={discoverMovies.length}
        hasMore={hasMore}
      >
        <Card movies={discoverMovies} />
      </InfiniteScroll>
    </div>
  );
};

export default Discover;

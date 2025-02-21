import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `/trending/all/day?language=en-US&page=${page}`
      );
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };
  const refreshMovies = () => {
    if (movies.length === 0) {
      fetchMovies();
    } else {
      setPage(1);
      setMovies([]);
      fetchMovies();
    }
  };
  useEffect(() => {
    refreshMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMovies}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      <div className="flex flex-col gap-20">
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Home;

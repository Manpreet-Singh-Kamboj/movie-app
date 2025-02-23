import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `/trending/all/day?language=en-US&page=${page}`
      );
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        // setHasMore(false);
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
  }, []);
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Home;

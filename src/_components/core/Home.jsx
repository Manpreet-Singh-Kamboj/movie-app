import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import TrendingMovie from "./_components/TrendingMovie";
import { useEffect } from "react";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setGenres } from "../../store/slices/GenreSlice";

const Home = () => {
  const dispatch = useDispatch();
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
      <div className="relative flex w-full h-full overflow-y-auto">
        <Sidebar />
        <div className="w-full sm:w-[70%] md:w-[75%] h-full flex-1 overflow-y-scroll">
          <TrendingMovie />
        </div>
      </div>
    </div>
  );
};

export default Home;

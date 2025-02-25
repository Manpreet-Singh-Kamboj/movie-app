import Genres from "./Genres";
import Button from "./Button";
import { ChevronRightCircleIcon, CirclePlayIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrendingMovie = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col w-full">
      <div className="flex shrink-0 relative w-full h-[55vh] md:h-[65vh] max-h-[55vh] md:max-h-[65vh] overflow-hidden">
        {movie ? (
          <div className="w-full h-full">
            <img
              src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.title || movie.original_title}
              width="100%"
              height="50%"
              className="w-full h-full object-cover object-center aspect-video"
            />
            <div className="flex flex-col gap-3 max-w-[50%] absolute bg-[#00000096] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-4 rounded-2xl">
              {movie.adult && (
                <p className="absolute right-[-4%] top-[-12%] bg-red-500 rounded-full py-1 px-1 text-center">
                  18+
                </p>
              )}
              <h2 className="text-white text-center text-lg font-bold">
                {movie.title || movie.original_title}
              </h2>
              {movie.genre_ids && <Genres movieGenres={movie.genre_ids} />}
              {movie.overview && (
                <p className="text-sm text-center text-gray-300">
                  {`${movie.overview.slice(0, 100)}...`}
                </p>
              )}
              <div className="flex gap-3 justify-center items-center flex-col md:flex-row">
                <Button
                  onClick={() => {
                    navigate(`/movie/${movie.id}/details`);
                  }}
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

      {/* {movies.length > 0 ? (
        <div className="flex shrink-0 mt-5 overflow-x-scroll">
          <HorizontalCards movies={movies} />
        </div>
      ) : null} */}
    </div>
  );
};

export default TrendingMovie;

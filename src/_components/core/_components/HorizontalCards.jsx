import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ title, movies, path }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex items-center justify-between px-2 py-2 text-white">
        <h2 className="font-bold text-2xl">{title || ""}</h2>
        <Link
          to={path || "/"}
          className="flex items-center gap-1 transition-all duration-300 ease-in hover:underline text-sm"
        >
          Explore more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex gap-10 h-70 py-2.5 px-2 overflow-x-scroll">
        {movies.map((movie, index) => (
          <div key={index} className="relative flex shrink-0 w-40 h-50 md:h-40">
            <div className="w-full">
              <img
                src={
                  movie.poster_path || movie.backdrop_path
                    ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${
                        movie.poster_path || movie.backdrop_path
                      }`
                    : "/fallback.svg"
                }
                alt={movie.title}
                width={"100%"}
                className="object-cover object-center rounded-lg"
              />
              <p className="text-center truncate whitespace-nowrap line-clamp-1">
                {movie.title || movie.original_title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;

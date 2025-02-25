const Card = ({ movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 px-4 md:px-8">
      {movies.map((movie) => (
        <div key={movie.id} className="flex flex-col gap-2">
          <img
            src={
              movie.poster_path || movie.backdrop_path
                ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${
                    movie.poster_path || movie.backdrop_path
                  }`
                : "/fallback.svg"
            }
            alt={movie.title}
            className="rounded-xl"
          />
          <div className="text-white text-sm">
            <p className="text-center truncate whitespace-nowrap line-clamp-1">
              {movie.title || movie.original_title}
            </p>
            <p className="text-center font-semibold opacity-60">
              {movie.release_date.split("-")[0]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

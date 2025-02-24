const HorizontalCards = ({ movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="flex gap-10 h-70 py-2.5 px-2">
      {movies.map((movie, index) => (
        <div key={index} className="relative flex shrink-0 w-40 h-50 md:h-40">
          <div className="">
            <img
              src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.title}
              width={"100%"}
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;

import HorizontalCards from "./HorizontalCards";

const MovieScroller = ({ title, movies, path }) => {
  return (
    <>
      {movies.length > 0 ? (
        <div className="flex shrink-0 mt-5">
          <HorizontalCards title={title} movies={movies} path={path} />
        </div>
      ) : null}
    </>
  );
};

export default MovieScroller;

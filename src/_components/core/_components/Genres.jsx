import { useSelector } from "react-redux";

const Genres = ({ movieGenres }) => {
  const genres = useSelector((state) => state.genres).genres;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {movieGenres.slice(0, 2).map((movieGenre, index) => {
        const matchedGenre = genres.find((genre) => genre.id === movieGenre);
        return matchedGenre ? (
          <span key={index} className="bg-gray-500 px-3 py-0.5 rounded">
            {matchedGenre.name}
          </span>
        ) : null;
      })}
    </div>
  );
};

export default Genres;

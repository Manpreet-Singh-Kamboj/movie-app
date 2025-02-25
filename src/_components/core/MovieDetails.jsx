import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loadMovieDetails } from "../../store/actions/MovieActions";
import { removeMovieInfo } from "../../store/slices/MovieSlice";
import Loader from "../common/Loader";
import { ChevronLeft, Play, SquareArrowOutUpRight } from "lucide-react";
import MovieScroller from "./_components/MovieScroller";

const MovieDetails = () => {
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadMovieDetails(id));
    return () => dispatch(removeMovieInfo());
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(${
          import.meta.env.VITE_TMDB_IMAGE_URL
        }/${info.movieDetails.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-[100vw] h-[100vh] overflow-y-auto"
    >
      <nav className="py-4 px-3 flex gap-5">
        <button
          className="flex gap-2 items-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ChevronLeft color="white" />
          <p className="text-white">Back</p>
        </button>
        <Link to={info.movieDetails.homepage}>
          <SquareArrowOutUpRight color="white" />
        </Link>
        {info.externalIds.imdb_id && (
          <Link
            to={`${import.meta.env.VITE_IMDB_URL}/${info.externalIds.imdb_id}`}
          >
            <img src="/imdb.svg" alt="IMDB Logo" width={25} />
          </Link>
        )}
        {info.externalIds.wikidata_id && (
          <Link
            to={`${import.meta.env.VITE_WIKI_URL}/${
              info.externalIds.wikidata_id
            }`}
          >
            <img src="/wiki.svg" alt="WikiPedia Logo" width={25} />
          </Link>
        )}
        {info.externalIds.instagram_id && (
          <Link
            to={`${import.meta.env.VITE_INSTA_URL}/${
              info.externalIds.instagram_id
            }`}
          >
            <img src="/insta.svg" alt="WikiPedia Logo" width={25} />
          </Link>
        )}
        {info.externalIds.facebook_id && (
          <Link
            to={`${import.meta.env.VITE_FB_URL}/${
              info.externalIds.facebook_id
            }`}
          >
            <img
              src="/facebook.svg"
              alt="WikiPedia Logo"
              width={25}
              color="#166FE5"
            />
          </Link>
        )}
      </nav>
      <div className="flex shrink-0 flex-col md:flex-row mt-2 md:mt-10 gap-3 md:gap-10 items-center justify-center">
        <div className="md:w-auto max-w-[350px]">
          <img
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/${
              info.movieDetails.poster_path
            }`}
            alt={info.movieDetails.title || info.movieDetails.original_title}
            className="w-[200px] md:w-[100%] max-w-[350px] rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:justify-center text-center md:text-start md:w-[50%]">
          <h1 className="text-2xl mb-2 font-bold text-white">
            {info.movieDetails.title || info.movieDetails.original_title}
          </h1>
          <p className="text-white text-sm mb-2">
            {info.movieDetails.release_date.split("-")[0]} -{" "}
            {info.movieDetails.runtime} minutes
          </p>
          <span className="rounded-full my-2 text-center text-md font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
            {(info.movieDetails.vote_average * 10).toFixed()}{" "}
            <span className="text-sm">%</span>
          </span>
          {info.movieDetails.overview && (
            <>
              <h3 className="text-center md:text-start text-xl text-white px-6 md:px-0 mb-2">
                Overview
              </h3>
              <p className="text-[#ffffffa4] text-center md:text-start px-5 md:px-0">
                {info.movieDetails.overview}
              </p>
            </>
          )}
          {info.watchProviders.US?.buy &&
            info.watchProviders.US.buy.length > 0 && (
              <div className="flex gap-4 mt-5 items-center">
                <h3 className="text-white font-semibold">Available to Buy</h3>
                <div className="flex gap-4 flex-wrap">
                  {info.watchProviders.US.buy.map((b, index) => (
                    <img
                      key={index}
                      src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/${
                        b.logo_path
                      }`}
                      width={40}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          {info.watchProviders.US?.rent &&
            info.watchProviders.US.rent.length > 0 && (
              <div className="flex gap-4 mt-5 items-center">
                <h3 className="text-white font-semibold">Available for Rent</h3>
                <div className="flex gap-4 flex-wrap">
                  {info.watchProviders.US.rent.map((b, index) => (
                    <img
                      key={index}
                      src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/${
                        b.logo_path
                      }`}
                      width={40}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          <div className="flex gap-5 mt-8 md:mb-0">
            <Link
              to={"#"}
              className="flex items-center gap-1 text-black bg-white py-2 cursor-pointer px-5 rounded-md mt-2"
            >
              <Play size={15} />
              Play Trailer
            </Link>
            <Link
              to={`/movie/watch/${info.movieDetails.id}`}
              className="flex items-center gap-1 text-black bg-white py-2 cursor-pointer px-5 rounded-md mt-2"
            >
              <Play size={15} />
              Play Movie
            </Link>
          </div>
        </div>
      </div>
      <div className=" overflow-x-auto">
        <MovieScroller title="Similar Movies" movies={info.similarMovies} />
        <MovieScroller
          title="Recommended Movies"
          movies={info.recommendations}
        />
      </div>
    </div>
  ) : (
    <Loader classes={`h-screen`} />
  );
};

export default MovieDetails;

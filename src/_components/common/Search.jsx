import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      setPage(1);
      return;
    }

    const debounceTimeout = setTimeout(() => {
      fetchSearchResults(searchValue, 1, true);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchValue]);

  const fetchSearchResults = async (query, pageNum, isNewSearch = false) => {
    try {
      const { data } = await axios.get(
        `/search/movie?query=${query}&page=${pageNum}`
      );

      if (data.results.length > 0) {
        setSearchResults((prev) =>
          isNewSearch ? data.results : [...prev, ...data.results]
        );
        setHasMore(data.results.length > 0);
        setPage(pageNum + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 sm:w-80">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search movies"
          className="bg-gray-300 px-3 sm:px-5 py-1 rounded-full w-full"
        />

        {searchResults.length > 0 && (
          <div
            id="search-results"
            className="absolute w-full bg-[#181818] text-white mt-1 rounded-lg shadow-lg max-h-96 overflow-auto z-50"
          >
            <InfiniteScroll
              dataLength={searchResults.length}
              next={() => fetchSearchResults(searchValue, page)}
              hasMore={hasMore}
              loader={<Loader />}
              scrollableTarget="search-results"
            >
              {searchResults.map((movie, index) => (
                <Link
                  to={`/movie/${movie.id}/details`}
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-[#232222] cursor-pointer"
                >
                  <img
                    src={
                      movie.poster_path || movie.backdrop_path
                        ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${
                            movie.poster_path || movie.backdrop_path
                          }`
                        : "/fallback.svg"
                    }
                    alt={movie.title}
                    className="w-[30%] object-cover rounded-lg"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">{movie.title}</p>
                    <p className="text-xs font-light">
                      {movie.overview
                        ? `${movie.overview.slice(0, 80)}...`
                        : ""}
                    </p>
                  </div>
                </Link>
              ))}
            </InfiniteScroll>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

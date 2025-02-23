import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="w-40 sm:w-60">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search movies"
          className="bg-gray-300 px-3  sm:px-5 py-1 rounded-full w-full sm:w-60"
        />
      </div>
    </>
  );
};

export default Search;

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4 flex flex-col sm:flex-row">
      <input
        type="text"
        className="w-full sm:w-auto flex-grow p-2 border border-gray-300 rounded-lg mb-2 sm:mb-0 sm:mr-2"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="w-full sm:w-auto p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

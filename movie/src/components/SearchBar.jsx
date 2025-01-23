import React, { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex justify-center mt-4 px-4"
>
  <div className="relative w-full max-w-lg">
    <input
      type="text"
      placeholder="Search for a movie..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded-full border-gray-700 bg-gray-800 focus:outline-none focus:ring focus:ring-orange-500 text-gray-100 pr-12 h-10"
    />
    <button
      type="submit"
      className="absolute top-1/2 transform -translate-y-1/2 right-0.5 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700"
    >
      <IoSearchOutline className="text-xl " />
    </button>
  </div>
</form>

  );
}

export default SearchBar;

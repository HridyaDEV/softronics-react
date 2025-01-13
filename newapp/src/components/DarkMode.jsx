import React, { useContext } from "react";
import DarkContext from "../Context/DarkContext";

function DarkMode() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkContext);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl mb-4">
        Click to change theme
      </h1>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded"
        onClick={toggleDarkMode}
      >
        Click Me
      </button>
    </div>
  );
}

export default DarkMode;

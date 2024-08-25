import React, { useState } from "react";

const Preferences = ({
  sources,
  authors,
  onApplyPreferences,
  onResetPreferences,
}) => {
  const [preferences, setPreferences] = useState({ source: "", author: "" });

  const handleChange = (event) => {
    setPreferences({
      ...preferences,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onApplyPreferences(preferences);
  };

  return (
    <div className="preferences-container grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 bg-white shadow-lg rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">Source</label>
          <select
            name="source"
            value={preferences.source}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Sources</option>
            {sources.map((source, index) => (
              <option key={index} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">Author</label>
          <select
            name="author"
            value={preferences.author}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">All Authors</option>
            {authors.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary col-span-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Apply Preferences
        </button>
      </form>
      <div className="reset-buttons flex flex-col justify-end">
        <button
          onClick={onResetPreferences}
          className="btn btn-secondary bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-200"
        >
          Reset Preferences
        </button>
        <button
          onClick={onResetPreferences}
          className="btn btn-secondary bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-200 mt-2"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Preferences;

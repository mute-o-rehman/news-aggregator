import React, { useState } from "react";

const Filters = ({ sources, onApplyFilters }) => {
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSourceChange = (e) => setSelectedSource(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);

  const applyFilters = () => {
    onApplyFilters({ source: selectedSource, date: selectedDate });
  };

  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <select
          onChange={handleSourceChange}
          className="block w-full bg-gray-200 border border-gray-300 rounded-md p-2"
        >
          <option value="">All Sources</option>
          {sources.map((source, index) => (
            <option key={index} value={source}>
              {source}
            </option>
          ))}
        </select>

        <input
          type="date"
          onChange={handleDateChange}
          className="block w-full bg-gray-200 border border-gray-300 rounded-md p-2"
        />

        <button
          onClick={applyFilters}
          className="block w-full bg-blue-500 text-white rounded-md p-2"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;

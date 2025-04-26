import { useState } from "react";

export default function FilterBar({ onApply }) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    feedbackText: "",
    category: "",
  });

  const handleApply = () => {
    const cleanedFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, val]) => val && val.trim() !== ""),
    );
    onApply(cleanedFilters);
  };

  const handleClear = () => {
    setFilters({
      name: "",
      email: "",
      feedbackText: "",
      category: "",
    });
    onApply({});
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          {showFilters ? "Hide Filters" : "Add Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Email"
              value={filters.email}
              onChange={(e) =>
                setFilters({ ...filters, email: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Message"
              value={filters.feedbackText}
              onChange={(e) =>
                setFilters({ ...filters, feedbackText: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            />
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="">All Categories</option>
              {[
                "Bug Report",
                "Feature Request",
                "Suggestion",
                "Performance Issue",
                "Other",
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleApply}
              className=" mx-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Apply Filters
            </button>
            <button
              onClick={handleClear}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

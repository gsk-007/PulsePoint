import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { axiosInstance } from "../lib/axios";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [feedbackData, setFeedbackData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});

  const getData = async () => {
    try {
      const data = await axiosInstance.get(`/feedback`, {
        params: {
          pageSize,
          page,
          ...filters,
        },
      });
      setFeedbackData(data.data.feedbacks);
      setPage(data.data.page);
      setTotalPages(data.data.pages);
    } catch (error) {}
  };

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
    getData();
  }, [pageSize, page, filters]);

  const onApplyFilter = (data) => {
    setFilters(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div className="p-6">
        <FilterBar onApply={onApplyFilter} />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <label className="text-gray-700">Page Size:</label>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-1"
          >
            {[2, 5, 10, 20, 30].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Feedback Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white">
              <tr>
                {["Name", "Email", "Message", "Category", "Timestamp"].map(
                  (item, idx) => (
                    <th
                      key={idx}
                      className="p-4 text-left uppercase tracking-wide"
                    >
                      {item}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((entry, index) => (
                <tr
                  key={entry._id}
                  className={`border-b transition-all duration-200 hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <td className="p-4 font-medium text-gray-800">
                    {entry.name}
                  </td>
                  <td className="p-4 text-gray-700">{entry.email}</td>
                  <td className="p-4 text-gray-600 font-mono break-words max-w-xs">
                    {entry.feedbackText}
                  </td>
                  <td className="p-4 text-gray-500">{entry.category}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(entry.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

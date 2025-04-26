import { useState } from "react";
import Navbar from "../components/Navbar";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const FeedbackForm = () => {
  const [feedbackFormData, setFeedbackFormData] = useState({
    name: "",
    email: "",
    feedbackText: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFeedbackFormChange = (e) => {
    setFeedbackFormData({
      ...feedbackFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosInstance.post("/feedback", feedbackFormData);
      navigate("/");
      toast.success("Thank you for submitting you feedback.");
    } catch (error) {
      toast.error(error.response.data.message || "Invalid form data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center p-4 mt-24">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Submit Feedback
          </h1>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              value={feedbackFormData.name}
              onChange={handleFeedbackFormChange}
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <input
              type="email"
              name="email"
              value={feedbackFormData.email}
              onChange={handleFeedbackFormChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <textarea
              placeholder="Your Feedback..."
              name="feedbackText"
              value={feedbackFormData.feedbackText}
              onChange={handleFeedbackFormChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-xl"
            ></textarea>
            <select
              value={feedbackFormData.category}
              onChange={handleFeedbackFormChange}
              name="category"
              className="w-full p-3 border border-gray-300 rounded-xl"
            >
              {[
                "Bug Report",
                "Feature Request",
                "Suggestion",
                "Performance Issue",
                "Other",
              ].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <button
              disabled={loading}
              type="submit"
              className={`w-full ${loading ? "bg-teal-300" : "bg-teal-500"} text-white py-3 rounded-xl hover:bg-teal-400 transition`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: App Name */}
        <Link to="/">
          <div className="text-xl font-bold">PulsePoint</div>
        </Link>

        {/* Center: Dashboard */}
        <Link to="/">
          <div className="hidden md:block text-lg font-medium">Dashboard</div>
        </Link>

        {/* Right: Button */}
        <div>
          <Link
            to="/submit"
            className="bg-white text-teal-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Submit Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
}

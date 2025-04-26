import { Routes, Route } from "react-router";
import FeedbackForm from "./pages/FeedbackForm";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/submit" element={<FeedbackForm />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

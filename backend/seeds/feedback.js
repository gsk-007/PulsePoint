import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Feedback from "../models/feedbackModel.js";

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Sample feedbacks
const sampleFeedbacks = [
  {
    name: "Bob Smith",
    email: "bob@example.com",
    feedbackText:
      "I found a bug when trying to submit feedback with a long message.",
    category: "Bug Report",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    feedbackText: "It would be great to have dark mode!",
    category: "Feature Request",
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    feedbackText: "The page loads a bit slow on my network.",
    category: "Performance Issue",
  },
  {
    name: "Evan Wright",
    email: "evan@example.com",
    feedbackText: "Loving the clean design, great job!",
    category: "Suggestion",
  },
  {
    name: "Fiona Green",
    email: "fiona@example.com",
    feedbackText: "Please make the form auto-save user input.",
    category: "Feature Request",
  },
  {
    name: "Hannah Lee",
    email: "hannah@example.com",
    feedbackText: "Found a typo on the home page title.",
    category: "Bug Report",
  },
  {
    name: "Ian Black",
    email: "ian@example.com",
    feedbackText:
      "What if you added integration with Slack for feedback notifications?",
    category: "Suggestion",
  },
  {
    name: "Julia Martinez",
    email: "julia@example.com",
    feedbackText:
      "App is working well, but I’d love to be able to edit my feedback after submitting.",
    category: "Feature Request",
  },
];

// Seed function
async function seedFeedback() {
  try {
    await Feedback.deleteMany(); // Clear existing data (optional)
    const result = await Feedback.insertMany(sampleFeedbacks);
    console.log(`✅ Inserted ${result.length} feedbacks`);
  } catch (error) {
    console.error("❌ Error seeding feedbacks:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedFeedback();

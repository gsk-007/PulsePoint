import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    feedbackText: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Bug Report",
        "Feature Request",
        "Suggestion",
        "Performance Issue",
        "Other",
      ],
      default: "Other",
    },
  },
  { timestamps: true },
);

feedbackSchema.index({ category: 1 });
feedbackSchema.index({ createdAt: -1 });

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

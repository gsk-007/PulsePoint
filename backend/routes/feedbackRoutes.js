import express from "express";
import {
  createFeedback,
  getFeedbacks,
} from "../controllers/feedbackController.js";

const router = express.Router();

router.route("/").get(getFeedbacks).post(createFeedback);

export { router as feedbackRoutes };

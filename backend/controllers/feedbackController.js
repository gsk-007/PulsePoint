import Feedback from "../models/feedbackModel.js";
import { createFeedbackSchema } from "../schemas/feedbackSchema.js";

/*
 * @description Create a Feedback
 * @route POST /api/users/login
 * @access Public
 */
const createFeedback = async (req, res) => {
  const { error, value } = createFeedbackSchema.validate(req.body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }
  const newFeedback = await Feedback.create(value);
  res.status(201).json(newFeedback);
};

/*
 * @description Get Fetch All Feedbacks
 * @route POST /api/users/login
 * @access Public
 */
const getFeedbacks = async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.page) || 1;

  const count = await Feedback.countDocuments();

  const feedbacks = await Feedback.find({})
    .sort({ createdAt: -1 })
    .skip(pageSize)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    feedbacks,
    page,
    pages: Math.ceil(count / pageSize),
  });
};

export { createFeedback, getFeedbacks };

import Joi from "joi";

export const createFeedbackSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().email().trim().required(),
  feedbackText: Joi.string().trim().min(10).max(1000).required(),
  category: Joi.string()
    .valid(
      "Bug Report",
      "Feature Request",
      "Suggestion",
      "Performance Issue",
      "Other",
    )
    .default("Other"),
});

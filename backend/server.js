import express from "express";
import "express-async-errors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { feedbackRoutes } from "./routes/feedbackRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health-check", (req, res) => {
  res.send("API is running");
});

app.use(feedbackRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;

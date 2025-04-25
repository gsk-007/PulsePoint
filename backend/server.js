import express from "express";
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health-check", (req, res) => {
  res.send("API is running");
});

export default app;

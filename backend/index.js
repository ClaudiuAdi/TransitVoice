const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const port = process.env.PORT || 4000;
const feedbackRoutes = require("./routes/feedbacksRoutes");
const connectDB = require("./config/db");

// Connect to db
connectDB();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(errorHandler);

app.use("/api/feedbacks", feedbackRoutes);

app.listen(port, () => {
  console.log("Server started on port", port);
});

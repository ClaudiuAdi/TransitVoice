const express = require("express");
require("dotenv").config();
const feedbackRoutes = require("./routes/feedbacks");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/feedbacks", feedbackRoutes);

// Connect to db
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, { dbName: "FeedbackDatabase" })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to db and listening on the port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    startPoint: {
      type: String,
      required: true,
    },
    endPoint: {
      type: String,
      required: true,
    },
    meansOfTransport: {
      type: String,
      required: true,
    },
    startHour: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    crowded: {
      type: String,
      enum: ["Liber", "Mediu", "Aglomerat"],
      default: "Liber",
      required: true,
    },
    observation: {
      type: String,
      required: false,
    },
    satisfaction: {
      type: String,
      enum: ["Sad", "Slightly Sad", "Neutral", "Happy", "Very Happy"],
      default: "Neutral",
      required: true,
    },
  },
  { timestamps: true },
  { collection: "feedbackDb" }
);

module.exports = mongoose.model("Feedback", feedbackSchema);

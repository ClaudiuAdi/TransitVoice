const express = require("express");
const {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");

const router = express.Router();

// GET all feedbacks
router.get("/", getFeedbacks);

// GET a single feedback
router.get("/:id", getFeedback);

// POST a feedback
router.post("/", createFeedback);

// PUT(update) a feedback
router.put("/:id", updateFeedback);

// DELETE a feedback
router.delete("/:id", deleteFeedback);

module.exports = router;

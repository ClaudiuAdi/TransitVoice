const Feedback = require("../models/feedbackModel");
const mongoose = require("mongoose");

// @desc    Get feedbacks
// @route   GET /api/feedbacks
// @acces   Public
const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });

  res.status(200).json(feedbacks);
};

// @desc    Get feedback
// @route   GET /api/feedbacks/:id
// @acces   Private
const getFeedback = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such feedback" });

  const feedback = await Feedback.findById(id);

  if (!feedback) return res.status(404).json({ error: "No such feedback" });

  res.status(200).json(feedback);
};

// @desc    Create feedback
// @route   POST /api/feedbacks
// @acces   Private
const createFeedback = async (req, res) => {
  const {
    startPoint,
    endPoint,
    meansOfTransport,
    startHour,
    duration,
    crowded,
    observation,
    satisfaction,
  } = req.body;

  //   add doc to db
  try {
    const feedback = await Feedback.create({
      startPoint,
      endPoint,
      meansOfTransport,
      startHour,
      duration,
      crowded,
      observation,
      satisfaction,
    });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Update feedback
// @route   PUT /api/feedbacks/:id
// @acces   Private
const updateFeedback = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such feedback" });

  const feedback = await Feedback.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!feedback) return res.status(400).json({ error: "No such feedback" });

  res.status(200).json(feedback);
};

// @desc    Delete feedback
// @route   DELETE /api/feedbacks/:id
// @acces   Private
const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such feedback" });

  const feedback = await Feedback.findOneAndDelete({ _id: id });

  if (!feedback) return res.status(400).json({ error: "No such feedback" });

  res.status(200).json(feedback);
};

module.exports = {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

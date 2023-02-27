import React from "react";

function FeedbackCard(props) {
  return (
    <div className="feedback-details">
      <p>
        <span>{props.feedback.startPoint}</span>-
        <span>{props.feedback.endPoint}</span>
      </p>
      <p>{props.feedback.meansOfTransport}</p>
      <p>{props.feedback.startHour}</p>
      <p>{props.feedback.duration}</p>
      <p>{props.feedback.crowded}</p>
      <p>{props.feedback.observation}</p>
      <p>{props.feedback.satisfaction}</p>
      <p>{props.feedback.createdAt}</p>
    </div>
  );
}

export default FeedbackCard;

import React, { useEffect, useState } from "react";
import FeedbackCard from "../components/FeedbackCard";

function Home() {
  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch("/api/feedbacks");
      const json = await response.json();

      if (response.ok) {
        setFeedbacks(json);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="home">
      <div className="feedbacks">
        {feedbacks &&
          feedbacks.map((feedback) => (
            <FeedbackCard key={feedback._id} feedback={feedback} />
          ))}
      </div>
    </div>
  );
}

export default Home;

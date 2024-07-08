import { useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const avgFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Description
        name={"Sip Happens Café"}
        descr={
          "Please leave your feedback about our service by selecting one of the options below"
        }
      />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          {...feedbacks}
          totalFeedback={totalFeedback}
          avgFeedback={avgFeedback}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </>
  );
};

export default App;

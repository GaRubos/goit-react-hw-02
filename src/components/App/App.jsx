import { useState } from "react";

import Description from "../Description/Description";

import Feedback from "../Feedback/Feedback";

import Options from "../Options/Options";

// const feedbackState = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedbacks((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description
        name={"Sip Happens Café"}
        descr={
          "Please leave your feedback about our service by selecting one of the options below"
        }
      />
      <Options updateFeedback={updateFeedback} />
      <Feedback {...feedbacks} />
    </>
  );
};

export default App;

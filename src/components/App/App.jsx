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
  const [feedbacks, setFeedbacks] = useState({ good: 0, netural: 0, bad: 0 });

  return (
    <>
      <Description
        name={"Sip Happens Café"}
        descr={
          "Please leave your feedback about our service by selecting one of the options below"
        }
      />
      <Options />
      <Feedback {...feedbacks} />
    </>
  );
};

export default App;

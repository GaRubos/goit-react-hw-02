const Feedback = ({ good, neutral, bad, totalFeedback, avgFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>
      <p>Total-Feedback:{totalFeedback}</p>
      <p>Positive: {avgFeedback} %</p>
    </div>
  );
};

export default Feedback;

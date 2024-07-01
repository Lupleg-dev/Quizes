const Results = ({ points, totalPoints, resetQuiz }) => {
  return (
    <div className="results-div">
      <h1 className="results-heading">Results</h1>
      <h2>
        {points === totalPoints ? "Wow! Perfect Score!" : "You received"}{" "}
        {points} out of {totalPoints} points
      </h2>
      <p className="results-text">
        Wanna learn how to code? Join our free Training
        <a
          className="results-rpg-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.lupleg.website/dashboard"
        >
          {" "}
          30DaysCodingChallenges
        </a>
      </p>
      <button onClick={resetQuiz} className="results-btn">
        Play again?
      </button>
    </div>
  );
};
export default Results;

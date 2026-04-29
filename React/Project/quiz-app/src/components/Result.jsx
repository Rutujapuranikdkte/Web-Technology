function Result({ score, total, onRestart }) {
  return (
    <div className="result-box">
      <h2>🎉 Quiz Completed!</h2>
      <p className="score">
        Your Score: <strong>{score}</strong> / {total}
      </p>

      <button className="restart-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
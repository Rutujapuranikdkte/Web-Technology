function Question({ data, onAnswer }) {
  return (
    <div className="question-box">
      <h2 className="question">{data.question}</h2>

      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
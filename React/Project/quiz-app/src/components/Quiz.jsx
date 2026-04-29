import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    question: "What hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
];

function Quiz() {
  const navigate = useNavigate();

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const next = currentQ + 1;
    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-body">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {showResult ? (
        <Result score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <>
          <div className="progress">
            Question {currentQ + 1} / {questions.length}
          </div>
          <Question
            data={questions[currentQ]}
            onAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;
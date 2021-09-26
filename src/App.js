import "./App.css";
import quizData from "./api/crypto-quiz-api";
import { useState } from "react";
import Quiz from "./Components/Quiz";
import QuizEnd from "./Components/Quiz-End";
import "./styles.css";

function App() {
  const [step, setStep] = useState(2);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  };

  return (
    <div
      className="flex justify-center w-screen items-center text-xs sm:text-sm"
      id="quiz-bg"
    >
      {step === 2 && (
        <Quiz
          data={quizData[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <QuizEnd
          results={answers}
          data={quizData}
          onReset={resetClickHandler}
        />
      )}
    </div>
  );
}

export default App;

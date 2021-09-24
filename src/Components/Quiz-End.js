import React, { useEffect, useState } from "react";

const End = ({ results, data, onReset }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correctAnswer = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].correct) {
        correctAnswer++;
      }
    });
    setCorrectAnswers(correctAnswer);
    correctAnswer = 0;
  }, []);

  return (
    <div className="w-4/12 h-80 p-7 flex flex-col rounded-md justify-center items-center mt-40 shadow-md bg-indigo-900">
      <div className="m-4">
        <div className="m-5">
          <h3 className="text-white text-3xl text-center">Your Score:</h3>
          <p className="text-white text-3xl text-center">
            {correctAnswers} / {data.length}
          </p>
          <p className="text-white text-center text-2xl">
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          {correctAnswers === data.length ? (
            <div>
              <button className="text-white flex p-4 px-7 rounded-full border-2  my-2 font-600 border-gray-300 bg-green-500">
                Congratulations
              </button>
              <button
                className="text-white flex mt-4 p-4 px-12 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500"
                onClick={onReset}
              >
                Play again
              </button>
            </div>
          ) : (
            <button
              className="text-white flex p-4 px-12 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500"
              onClick={onReset}
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default End;

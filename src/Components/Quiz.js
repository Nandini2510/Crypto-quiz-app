import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");

  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);
  const notify = (description) => {
    toast(description);
  };
  const changeHandler = (e) => {
    setSelected(e.target.value);

    if (error) {
      setError("");
    }
  };

  const backClickHandler = () => {
    if (activeQuestion > 0 && activeQuestion <= numberOfQuestions)
      onSetActiveQuestion(activeQuestion - 1);
  };
  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);

      //   progressbarfull.style.width = `${(counter / numberOfQuestions) * 100}%`;
    } else {
      onSetStep(3);
    }
  };

  return (
    <>
      <div className="w-7/12 p-7 flex flex-col rounded-md justify-center items-center mt-36 shadow-md bg-indigo-900">
        <div>
          <div className="content flex flex-col justify-center items-center">
            <h1 className="font-serif text-white text-3xl p-4 text-center block">
              Question {activeQuestion + 1}/{numberOfQuestions}
            </h1>
            {/* <div id="progressBar">
              <div id="progress-bar-full"></div>
            </div> */}

            <h2 className="mb-5 text-white text-lg">{data.question}</h2>
            <div className="grid" ref={radiosWrapper}>
              {data.options.map((item, key) => (
                <label
                  className=" radio has-background-light flex p-4 px-36 rounded-full border-2  my-2 font-600 border-purple-300"
                  key={key}
                >
                  <input
                    className="radio_btn h-90 w-90 mt-2 form-radio"
                    key={key}
                    id={key}
                    type="radio"
                    name="answer"
                    value={item.answerText}
                    onChange={changeHandler}
                    onClick={() => notify(item.description)}
                  />
                  {/* <label for={key}>{data.description[key]}</label> */}
                  <ToastContainer />
                  <span className="pl-4 text-white text-xl">
                    {item.answerText}
                  </span>
                </label>
              ))}
            </div>
            {error && <div className="text-white">{error}</div>}
            <div className="flex justify-between">
              <button
                className="text-white text-xl mr-5 flex p-4 px-9 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500"
                onClick={backClickHandler}
              >
                Back
              </button>
              <button
                className=" text-white text-xl flex p-4 px-9 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500"
                onClick={nextClickHandler}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;

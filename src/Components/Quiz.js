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
  const [description, setDescription] = useState("");
  const [submit, setSubmit] = useState(true);

  const radiosWrapper = useRef();
  const progressbarfull = document.getElementById("progress-bar-full");
  let counter = 0;

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);
  const notify = () => {
    toast(description);
  };
  const submitHandler = () => {
    setSubmit(false);
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
    setSubmit(true);
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
      counter = counter + 1;
      setSubmit(true);

      // progressbarfull.style.width = `${(counter / numberOfQuestions) * 100}%`;
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="w-full overflow-y-scroll max-w-3xl m-auto p-4 min-h-screen flex flex-col sm:rounded-xl items-center  shadow-md quizbg ">
      <div className="h-full sm:m-2 flex-1 flex flex-col justify-between items-center">
        <h1 className="font-serif text-white p-4 text-center block text-base md:text-lg">
          Question {activeQuestion + 1}/{numberOfQuestions}
        </h1>
        {/* <div id="progressBar">
              <div id="progress-bar-full"></div>
            </div> */}

        <h2 className="flex mb-5 text-white text-center w-8/10 text-base md:text-lg">
          {data.question}
        </h2>
        <div className="w-full max-w-sm" ref={radiosWrapper}>
          {data.options.map((item, key) => (
            <div className="my-6 w-full">
              <label
                className="radio  w-full has-background-light flex items-center p-4 sm:p-6 rounded-3xl border-2  my-2 font-600 border-purple-300 border-opacity-30"
                key={key}
              >
                <input
                  className="radio_btn form-radio"
                  key={key}
                  id={key}
                  type="radio"
                  name="answer"
                  value={item.answerText}
                  onChange={changeHandler}
                  onClick={() => {
                    setDescription(item.description);
                    setSubmit(true);
                  }}
                />
                {/* <label for={key}>{data.description[key]}</label> */}
                <ToastContainer />
                <p className="pl-4 text-white options">{item.answerText}</p>
              </label>
            </div>
          ))}
        </div>
        {error && <div className="text-white">{error}</div>}
        <div className="flex justify-between btn ">
          <button
            className="w-36 grid place-items-center sm:font-400 text-white text-xl mr-5 p-3 px-8 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500  border-opacity-30"
            onClick={backClickHandler}
          >
            Back
          </button>
          {submit ? (
            <button
              className="w-36 grid place-items-center sm:font-400 text-white text-xl p-3 px-6 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500  border-opacity-30"
              onClick={() => {
                submitHandler();
                notify();
              }}
            >
              Submit
            </button>
          ) : (
            <button
              className="w-36 grid place-items-center text-center sm:font-400 text-white text-xl p-3 px-6 rounded-full border-2  my-2 font-600 border-gray-300 bg-blue-500  border-opacity-30"
              onClick={nextClickHandler}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

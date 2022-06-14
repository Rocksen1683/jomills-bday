import React, { useState } from "react";
import questions from "./questions.json";
import Video from "./Videos.js";

function Form(props) {
  const [ans, setAns] = useState("");
  const [ansId, setAnsId] = useState(0);

  const answerChangeHandler = (e) => {
    setAns(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (questions.Questions[ansId].answer === ans) {
      setAnsId(ansId + 1);
    }
  };
  return (
    <>
      {ansId < 4 && <>
        <label>{questions.Questions[ansId].question}</label>
        <input
          type="text"
          placeholder="hit me up"
          value={ans}
          onChange={answerChangeHandler}
        ></input>
        <button onClick={submitHandler}>
          Let's see if you're right bitch
        </button>
        <Video embedId={questions.Questions[ansId].link} />
      </>}
      {ansId >= 4 && <Video embedId="zR43V0ogJbI" />}
    </>
  );
}
export default Form;

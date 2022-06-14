import React, { useState } from "react";
import questions from './questions.json';
import Video from "./Videos.js";

function Form(props) {
  const [ans, setAns] = useState("");
  const [ansId, setAnsId] = useState(1);

  const answerChangeHandler = (e) => {
    setAns(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('asdasd')
    if (questions.Questions[ansId].answer == ans) {
      console.log('popaosda')
      setAnsId(ansId + 1);
    }
  };

  return (
    <>
      <label>{questions.Questions[ansId].question}</label>
      <input
        type="text"
        placeholder="hit me up"
        value={ans}
        onChange={answerChangeHandler}
      ></input>
      <button onClick={submitHandler}>
        Let's see if your answer is correct
      </button>
      <Video embedId={questions.Questions[ansId].link} />
    </>
  );
}
export default Form;

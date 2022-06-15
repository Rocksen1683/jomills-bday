import React, { useState } from "react";
import questions from "./questions.json";
import Video from "./Videos.js";
import { Button } from "./styles/stylez.js";

function Form(props) {
  const [ans, setAns] = useState("");
  const [ansId, setAnsId] = useState(0);

  const answerChangeHandler = (e) => {
    setAns(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('asdasd')
    if (questions.Questions[ansId].answer === ans) {
      console.log('popaosda')
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
        <Button onClick={submitHandler}>
          Let's see if you're right bitch
        </Button>
        <br></br>
        <Video embedId={questions.Questions[ansId].link} />
      </>}
      {ansId >= 4 && <Video embedId="zR43V0ogJbI" />}
    </>
  );
}
export default Form;

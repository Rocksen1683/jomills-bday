import React, { useState } from "react";
import questions from "./questions.json";
import Video from "./Videos.js";
import { StyledButton, StyledInput } from "./styles/stylez.js";
import './styles/styles.css'

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

  if (ansId === 0) {
    return (
      <>
        <label style={{fontSize:"35px"}}>{questions.Questions[ansId].question}</label>
        <StyledInput
          type="text"
          placeholder="hit me up"
          value={ans}
          onChange={answerChangeHandler}
        ></StyledInput>
        <StyledButton onClick={submitHandler}>
          Let's see if you're right bitch
        </StyledButton>
      </>
    );
  }

  else {
    return (
      <>
        {ansId === 0 && (
          <>
            <label>{questions.Questions[ansId].question}</label>
            <StyledInput
              type="text"
              placeholder="hit me up"
              value={ans}
              onChange={answerChangeHandler}
            ></StyledInput>
            <StyledButton onClick={submitHandler}>
              Let's see if you're right bitch
            </StyledButton>
          </>
        )}
        {ansId < 4 && (
          <>
            <label>{questions.Questions[ansId].question}</label>
            <StyledInput
              type="text"
              placeholder="hit me up"
              value={ans}
              onChange={answerChangeHandler}
            ></StyledInput>
            <StyledButton onClick={submitHandler}>
              Let's see if you're right bitch
            </StyledButton>
            <Video embedId={questions.Questions[ansId].link} />
          </>
        )}
        {ansId >= 4 && <Video embedId="zR43V0ogJbI" />}
      </>
    );
  }
}
export default Form;

import React, { useState } from "react";
import questions from "./questions.json";
import Video from "./Videos.js";
import { StyledButton, StyledInput } from "./styles/stylez.js";
import './styles/styles.css'
import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop autoplay={2000}>
      <Carousel.Item>
        <img width="69%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="69%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="69%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0014.jpg")}
        />
      </Carousel.Item>
    </Carousel>
  );
};


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
        <label style={{ fontSize: "35px" }}>{questions.Questions[ansId].question}</label>
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
            <Gallery />
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

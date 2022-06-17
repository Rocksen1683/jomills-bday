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
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG_0843.jpg")}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0014.jpg")}
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220403-WA0050.jpg")}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0015.jpg")}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0016.jpg")}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0018.jpg")}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0019.jpg")}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0020.jpg")}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          classname="photo"
          width={552}
          height={500}
          src={require("./fotos/IMG-20220616-WA0021.jpg")}
        />
      </Carousel.Item>

    </Carousel>
  );
};


function Form(props) {
  const [ans, setAns] = useState("");
  const [ansId, setAnsId] = useState(0);
  const [wrong, setwrong] = useState(0);
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

    else {
      setwrong(wrong + 1)
    }
  };

  if (ansId === 0) {
    return (
      <>
        <Gallery />
        <label style={{ fontSize: "35px" }}>{questions.Questions[ansId].question}</label>
        <label style={{ fontSize: "20px" }}>Incorrect Answers: {wrong}</label>
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
            <label style={{ fontSize: "20px" }}>Incorrect Answers: {wrong}</label>
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
        {ansId < 11 && (
          <>
            <label>{questions.Questions[ansId].question}</label>
            <label style={{ fontSize: "20px" }}>Incorrect Answers: {wrong}</label>
            <StyledInput
              type="text"
              placeholder="hit me up"
              value={ans}
              onChange={answerChangeHandler}
            ></StyledInput>
            <StyledButton onClick={submitHandler}>
              Let's see if you're right bitch
            </StyledButton>
            <Video embedId={questions.Questions[ansId - 1].link} />
          </>
        )}
        {ansId >= 11 && (<>
          <p style={{ fontSize: "24px" }}> Congratulations on reaching the end...of this quiz, the start of your 19th year lies ahead though! Here's your reward, we hope you enjoy it!</p>
          <Video embedId="zR43V0ogJbI" />
        </>)}
      </>
    );
  }
}
export default Form;

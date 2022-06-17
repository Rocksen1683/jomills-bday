import styled from "styled-components";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


//create a background image for the entire App that will be the same for all pages
const Background = styled.div`
  background-image: url(${require("../fotos/IMG-20220616-WA0014.jpg")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  height: 120vh;
`;

const CenteredForm = styled.form`
  text-align: center;
  background: #282c34;
  padding: 20px;
  border-radius: 5px;
  color: white;
  font-size: 1.5em;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin: 0 auto;
  width: 59%;
  height: 59%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

//Create a stylized button styled component that changes color when clicked
const StyledButton = styled(Button)`
  color: ${(props) => (props.primary ? "grey" : "white")};
  background-color: transparent;
  font-size: 0.69em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid white;
  border-radius: 2px;
  &:hover {
    background: ${(props) => (props.primary ? "white" : "white")};
    color: ${(props) => (props.primary ? "grey" : "black")};
  }
`;

const StyledInput = styled.input`
  padding: 0.25em;
  margin: 0.25em;
  color: ${(props) => props.inputColor || "white"};
  height:25px;
  width:200px;
  placeholder-color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 2px;
`;




export { Title, Wrapper, CenteredForm, Button, StyledButton, StyledInput, Background };


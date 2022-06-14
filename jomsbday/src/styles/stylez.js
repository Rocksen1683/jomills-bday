import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

//Create a Centered Form Component that'll render a <form> tag with some styles
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
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export { Title, Wrapper, CenteredForm };


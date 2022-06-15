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
  width: 69%;
  height: 69%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @Video (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 50%;
  }
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

export { Title, Wrapper, CenteredForm, Button };


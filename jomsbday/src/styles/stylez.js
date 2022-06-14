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


import questions from './questions.json';
import {Wrapper, Title, CenteredForm} from './styles/stylez.js';
import React from 'react';
import Video from './Videos.js';
import Form from './form.js';
function App() {

  const q = questions.Questions[0];

  return (
    <div className="App">
      <Wrapper>
        <Title>Jomirisu's 19th Bday</Title>
      </Wrapper>
      <header className="App-header">
        <CenteredForm>
          <h1>Jomirisu's 19th Bday</h1>
          <h2>Here's your first one!</h2>
          <Video embedId="rokGy0huYEA" />
          <p>{q.qId}</p>
        </CenteredForm>
      </header>
    </div>
  );
}


export default App;

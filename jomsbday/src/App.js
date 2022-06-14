import questions from './questions.json';
import {CenteredForm} from './styles/stylez.js';
import React from 'react';
import Video from './Videos.js';
import Form from './form.js';
function App() {

  const q = questions.Questions[0];

  return (
    <div className="App">
      <header className="App-header">
        <CenteredForm>
          <h1>Jomirisu's 19th Bday</h1>
          <h2>Here's your first one!</h2>
          <Video embedId="rokGy0huYEA" />
          <Form />
          <p>{q.qId}</p>
        </CenteredForm>
      </header>
    </div>
  );
}


export default App;

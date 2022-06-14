import questions from './questions.json';
import React from 'react';
import Video from './Videos.js';
import './App.css';
import Form from './form.js';
function App() {

  const q = questions.Questions[0];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jomirisu's 19th Bday</h1>
        <h2>Here's your first one!</h2>
        <Video embedId="rokGy0huYEA" />
        <p>
          {q.qId}
        </p>
        <Form></Form>
      </header>
    </div>
  );
}


export default App;

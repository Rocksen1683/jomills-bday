import React from 'react';
import Form from './form.js';
import { CenteredForm } from './styles/stylez.js';
function App() {

  return (
    <div className="App">
      <CenteredForm>
        <header className="App-header">
          <h1>Jomirisu's 19th Bday</h1>
          <h2>Here's your question!</h2>
        </header>
        <Form></Form>
      </CenteredForm>
    </div>
  );
}


export default App;

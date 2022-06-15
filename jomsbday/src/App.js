import React from 'react';
import Form from './form.js';
import { CenteredForm } from './styles/stylez.js';
import './styles/styles.css'

function App() {

  return (
    <div className="App">
      <CenteredForm>
        <header className="App-header">
          <h1>Jomirisu's 19th Bday</h1>
        </header>
        <Form></Form>
      </CenteredForm>
    </div>
  );
}


export default App;

import React from 'react';
import Form from './form.js';
import { Background, CenteredForm } from './styles/stylez.js';
import './styles/styles.css'



function App() {
  return (
    <Background>
      <div className="App">
        <CenteredForm>
          <header className="App-header">
            <h1>Jomirisu's 19th Bday</h1>
          </header>
          <Form></Form>
        </CenteredForm>
      </div>
    </Background>
  );
}


export default App;

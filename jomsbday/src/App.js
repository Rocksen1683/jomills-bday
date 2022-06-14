import questions from './questions.json';
import './App.css';
import Form from './form.js';
function App() {

  const q = questions.Questions[0];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jomirisu's 19th Bday</h1>
        <p>
          {q.qId}
        </p>
        <Form></Form>
      </header>
    </div>
  );
}


export default App;

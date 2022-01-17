import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Student name="Shaid" age="40" date="2022, 01, 10" ></Student>
      <Student name="Saleem" age="30" date="2021, 01, 10"></Student>
    </div>
  );
}

export default App;

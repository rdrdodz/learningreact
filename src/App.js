import './App.css';
import NewStudent from './components/NewStudent';
import Student from './components/Student';
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper myclass="blue-border wider">
      <h1>Hello World!</h1>
      <Student name="Shaid" age="40" date="2022, 01, 10" ></Student>
      <Student name="Saleem" age="30" date="2021, 01, 10"></Student>
      <NewStudent />
    </Wrapper>
  );
}

export default App;

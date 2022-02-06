import './App.css';
import Student from './Components/Student';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <Wrapper className="green-thin">
      <h1 className="">Our Students</h1>
      <Student studentName="Saleem Raza" studentLevel="Freshmand" studentMajor="CS" />
    </Wrapper>
  );
}

export default App;

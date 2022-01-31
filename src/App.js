import {useState} from "react";
import './App.css';
import NewStudent from './components/NewStudent';
import StudentsList from './components/StudentsList';
import Wrapper from "./components/Wrapper";

function App() {
  let [students_list, setStudentList] = useState([
    {
      key1: Date.now()+""+Math.floor(Math.random()*1000000),
      name: "Shahid",
      age: "40",
      date: "2022, 01, 10"
    },
    {
      key1: Date.now()+""+Math.floor(Math.random()*1000000),
      name: "Saleem",
      age: "30",
      date: "2021, 01, 10"
    },
    {
      key1: Date.now()+""+Math.floor(Math.random()*1000000),
      name: "Saleem",
      age: "30",
      date: "2021, 01, 10"
    }
  ]);
  const getNewStudent = input=>{
    input.key1 =  Date.now()+""+Math.floor(Math.random()*1000000);
    setStudentList((initState)=>[input, ...initState]);
  }

  return (
    <Wrapper myclass="blue-border wider">
      <h1>Hello World!</h1>
      <StudentsList students_list={students_list} />
      <NewStudent getNewStudent={getNewStudent} />
    </Wrapper>
  );
}

export default App;

import './App.css';
import NewStudent from './Components/NewStudent';
import Student from './Components/Student';
import Wrapper from './Components/Wrapper';
import {useState} from "react"


function App() {
  const [studentList, setStudentList] = useState(
    [
      
    ]);

  const onSubmitHandler = inputs => {
    setStudentList((initListValue)=>
      [...initListValue,
        { key: initListValue.length,
          studentName: inputs.studentName,
          studentMajor: inputs.studentMajor,
          studentLevel: inputs.studentLevel
       }
      ]
    );
  }

  let students;

  if(studentList.length === 0){
    students = <Wrapper className="green-thin">No Student Registered</Wrapper>
  }else{
    students = studentList.map(student=>
      <Student
      key={student.key} 
      studentName={student.studentName} 
      studentLevel={student.studentLevel} 
      studentMajor={student.studentMajor}
      />
      );
  }

  return (
    <Wrapper className="red-thick">
      <h1 className="main-heading">Our Students</h1>
      <NewStudent onSubmitHandler={onSubmitHandler} />
      {students}
    </Wrapper>
  );
}

export default App;

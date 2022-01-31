import "./StudentsList.css";
import Student from "./Student";

const StudentsList = (props)=>{
    // console.log(props.students_list);
    return (
        props.students_list.map(student=>
            <Student 
                key={student.key1} 
                name={student.name}
                age={student.age}
                date={student.date}
            />
        )
    );
};

export default StudentsList;
import "./NewStudentForm.css"
import {useRef} from "react"

const NewStudentForm = props=>{
    let studentNameInput = useRef("");
    let studentLevelInput = useRef("");
    let studentMajorInput = useRef("");
    console.log(studentNameInput);
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const inputs = {
            studentName: studentNameInput.current.value,
            studentLevel: studentLevelInput.current.value,
            studentMajor: studentMajorInput.current.value
        }

        studentNameInput.current.value = "";
        studentLevelInput.current.value = "";
        studentMajorInput.current.value = "";

        props.onSubmitHandler(inputs);

    };
    return (
        <form onSubmit={onSubmitHandler}>
            <input ref={studentNameInput} name="studentName" type="text" placeholder="Student Name" />
            <input ref={studentLevelInput} name="studentLevel" type="text" placeholder="Student Level" />
            <input ref={studentMajorInput} name="studentMajor" type="text" placeholder="Student Major" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewStudentForm;
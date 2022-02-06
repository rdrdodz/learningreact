import "./Student.css";
import Wrapper from "./Wrapper.js";

const Student = props =>{
    return (
        <Wrapper className="green-thin">
            <h2>Name: {props.studentName}</h2>
            <h2>Level: {props.studentLevel}</h2>
            <h2>Major: {props.studentMajor}</h2>
        </Wrapper>
    );
};

export default Student;
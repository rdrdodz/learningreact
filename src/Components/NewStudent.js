import "./NewStudent.css"
import NewStudentForm from "./NewStudentForm";
import Wrapper from "./Wrapper";

const NewStudent = props=>{
    return(
        <Wrapper className="green-thin">
            <NewStudentForm onSubmitHandler={props.onSubmitHandler} />
        </Wrapper>
    );
};

export default NewStudent;
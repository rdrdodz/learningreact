import Wrapper from "./Wrapper";
import NewStudentForm from "./NewStudentForm";

function NewStudent(props){
    return (
            <Wrapper myclass="blue-border">
                <NewStudentForm getNewStudent={props.getNewStudent}/>
            </Wrapper>
    );
}

export default NewStudent;
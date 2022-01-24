import { useState } from "react";
import Wrapper from "./Wrapper";

function NewStudent(props){
    const [input, setInput] = useState({
        name: "",
        age: 15,
        date: Date.now()
    });

    function onChangeHandler(event){
        // console.log(event.target.name);
        
        // setInput({...input, key: event.target.value});
        setInput((crrInput)=>{
            let key = event.target.name;
            return ({
                ...crrInput,
                [key]: event.target.value
            });
        });
        console.log(input);
    }


    return (
            <Wrapper myclass="blue-border">
                
                <form>
                    <input name="name" type="text" placeholder="Name" onChange={onChangeHandler} /><br />
                    <input name="age" type="number" min="15" max="100" step="1" placeholder="Age" onChange={onChangeHandler} /> <br />
                    <input name="date" type="date" placeholder="Date of Entry" onChange={onChangeHandler} /> <br />
                    <button>Submit</button>
                </form>
            </Wrapper>
    );
}

export default NewStudent;
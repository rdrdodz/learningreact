import { useState } from "react";
import "./NewStudentForm.css";

function NewStudentForm(props){
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

    function onSubmitHandler(event){
        event.preventDefault();
        let values = input;
        setInput({
            name: "",
            age: "",
            date: ""
        })
        console.log(event);
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input name="name" value={input.name} type="text" placeholder="Name" onChange={onChangeHandler} /><br />
            <input name="age" value={input.age} type="number" min="15" max="100" step="1" placeholder="Age" onChange={onChangeHandler} /> <br />
            <input name="date" value={input.date} type="date" placeholder="Date of Entry" onChange={onChangeHandler} /> <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewStudentForm;
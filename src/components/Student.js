import {useState} from "react";
import './Student.css';
import Wrapper from './Wrapper';

function Student(props){
    console.log("Printing Props", props);
    const date = (new Date(props.date)).toISOString();
    const name = props.name;
    const [age, setAge]= useState(parseInt(props.age));


    function onClickHandler(){
        setAge(age + 1);
        console.log(age);
    }
    
    return(
        <Wrapper myclass="red-border">
            <h1>I am a student</h1>
            <h2>Name: {name}</h2>
            <h2 onClick={onClickHandler}>Age: {age}</h2>
            <h2>Date: {date}</h2>
        </Wrapper>
    );
}

export default Student;
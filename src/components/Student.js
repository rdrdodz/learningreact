import './Student.css';

function Student(props){
    const date = (new Date(props.date)).toISOString();
    const name = props.name;
    const age = parseInt(props.age);
    
    return(
        <div className="outer-container">
            <h1>I am a student</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Date: {date}</h2>
        </div>
    );
}

export default Student;
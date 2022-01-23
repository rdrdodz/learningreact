import "./Wrapper.css"

function Wrapper(props){
    let className = "outer-boundry " + props.myclass;

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Wrapper
import ReactDom from "react-dom";
import Modal from "./Modal";

const BackDrop = props => {
    return(
        ReactDom.createPortal(
            <Modal />, 
            document.getElementById("modal-root")
        )
    );
};

export default BackDrop;
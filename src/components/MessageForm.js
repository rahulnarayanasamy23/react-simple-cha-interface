import { useRef } from "react";

import "./MessageForm.css"


const MessageForm = (props) => {
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        if(inputRef.current.value !== "") {
            props.onMessage(inputRef.current.value);
            inputRef.current.value = "";
        }
    }


    return (
        <form onSubmit={submitHandler} className="form">
            <input ref={inputRef} placeholder="Type your message here..." />
            <button type="submit">Send Message</button>
        </form>
    )
}

export default MessageForm;
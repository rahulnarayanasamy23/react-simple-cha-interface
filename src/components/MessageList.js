
import { useEffect, useRef } from "react";
import Message from "./Message";
import "./MessageList.css"

const MessageList = (props) => {
    const ref = useRef()
    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    })
    return (
        <div className="message-list" ref={ref}>
            <div className="container">
                {props.messages.map((msg, i) => {
                    return  <Message key={i} msg={msg} />
                })}
            </div>
        </div>
    )
}

export default MessageList;
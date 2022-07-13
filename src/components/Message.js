
import "./Message.css"

const Message = (props) => {
    let classess = props.msg.author === "You" ? "right" : "left";

    return (
        <div className="message">
            <div className={classess}>{props.msg.author === "You" ? " You:-" : "Them:-"} {props.msg.message}</div>
        </div>
    )
}

export default Message;
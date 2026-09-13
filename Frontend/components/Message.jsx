import ReactMarkdown from "react-markdown";

function Message({ message }) {
    return (
        <ReactMarkdown>
            {message.text}
        </ReactMarkdown>
    );
}

export default Message;
import { useState } from "react";
import Message from "./Message";

export default function ChatBox() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: "Hi! Paste a YouTube link and ask me anything about the video."
        }
    ]);

    const handleSend = async () => {
        if (!message.trim())
            return;



        const response = await fetch("http://127.0.0.1:8000/api/ask/", {

            method: "POST",
            body: JSON.stringify({
                question: message,
            }),



        })

        const data = await response.json()

        console.log(data)

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: message
            },
            {
                role: "assistant",
                text: data.answer,
            }
        ]);

        setMessage("");

    };

    return (
        <div className="flex flex-col h-[85vh] max-w-5xl mx-auto bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden">

            {/* Chat Messages */}
            <div className="chat-scroll flex-1 overflow-y-auto px-8 py-8 space-y-6">

                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === "user"
                            ? "justify-end"
                            : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-[75%] px-5 py-4 rounded-3xl text-sm leading-7 ${msg.role === "user"
                                ? "bg-red-600 text-white rounded-br-lg"
                                : "bg-zinc-900 text-zinc-100 rounded-bl-lg border border-zinc-800"
                                }`}
                        >
                            <Message message={msg} />
                            {/* {msg.text} */}
                        </div>
                    </div>
                ))}

            </div>


            <div className="border-t border-zinc-800 p-5">

                <div className="flex items-end gap-3 bg-zinc-900 border border-zinc-800 rounded-3xl px-5 py-3">

                    <input
                        rows={1}
                        placeholder="Ask an YouTube video..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        className="flex-1 pb-3 resize-none overflow-hidden outline-none text-white placeholder:text-zinc-500 leading-6"
                    />

                    <button
                        onClick={handleSend}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-500"
                    >
                        ↑
                    </button>

                </div>

            </div>

        </div>
    );
}
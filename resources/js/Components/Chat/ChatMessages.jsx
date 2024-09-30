import { Fragment, useEffect, useRef, useState } from "react";
import "../../../css/chatMessages.css"; // Import your CSS file

export default function ChatMessages({ messages, auth_id }) {
    const isReceivedMessage = (message) => {
        return message.receiver_id === auth_id;
    };

    // State to keep track of visible messages
    const [visibleMessages, setVisibleMessages] = useState([]);
    const messagesEndRef = useRef(null);
    const messagesLimit = 20; // Number of messages to show at once

    useEffect(() => {
        // Initialize visible messages
        setVisibleMessages(messages.slice(-messagesLimit)); // Show the latest messages
    }, [messages]);

    // Function to load more messages
    const loadMoreMessages = () => {
        setVisibleMessages((prevVisibleMessages) => {
            const startIndex = Math.max(
                0,
                messages.length - (prevVisibleMessages.length + messagesLimit)
            );
            const newMessages = messages.slice(
                startIndex,
                messages.length - prevVisibleMessages.length
            );
            return [...newMessages, ...prevVisibleMessages]; // Prepend new messages to visible messages
        });
    };

    // Use the Intersection Observer to detect when the user scrolls to the top
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreMessages(); // Load more messages when the top is visible
                }
            },
            { threshold: 1.0 }
        );

        if (messagesEndRef.current) {
            observer.observe(messagesEndRef.current);
        }

        // Cleanup the observer on component unmount
        return () => {
            if (messagesEndRef.current) {
                observer.unobserve(messagesEndRef.current);
            }
        };
    }, [messages]);

    return (
        <div className="chat-messages">
            {" "}
            {/* Use a class for styling */}
            {visibleMessages.map((message) => (
                <Fragment key={message.id}>
                    <div
                        className={`${
                            isReceivedMessage(message)
                                ? "receive-chat justify-start"
                                : "send-chat justify-end"
                        } relative flex`}
                    >
                        <div
                            className={`mb-2 max-w-[80%] rounded ${
                                isReceivedMessage(message)
                                    ? "bg-violet-400"
                                    : "bg-violet-200"
                            } px-5 py-2 text-sm ${
                                isReceivedMessage(message)
                                    ? "text-white"
                                    : "text-slate-500"
                            }`}
                        >
                            <p>{message.message}</p>
                        </div>
                    </div>
                </Fragment>
            ))}
            <div ref={messagesEndRef} style={{ height: "1px" }} />{" "}
            {/* Target for the observer */}
        </div>
    );
}

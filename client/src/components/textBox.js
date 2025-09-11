//author: gabriel abbate abbategabriel@gmail.com

import React, { useState } from "react";
import { sendMessage } from "../utils/msgApi";

function TextBox() {
    const [newMessage, setNewMessage] = useState("");
    const [userId, setUserId] = useState();
    const [targetId, setTargetId] = useState();
    const handleSend = async (event) => {
        event?.preventDefault();
        const obj = {
            "id": 1, 
            "msg": newMessage,
            "sender": 1,
            "target": 1
        };
        console.log(`calling api with message ${JSON.stringify(obj)}`);
        try{
            await sendMessage(obj);
            setNewMessage("");
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };
    //public record Message(int Id, string Msg, int Sender, int Target);
    return (
        <div>
            <form className="text-input-form" onSubmit={(event) => handleSend(event)}>
                <textarea
                    name="text-input"
                    value={newMessage}
                    onChange={(event) => {
                        setNewMessage(event.target.value);
                    }}
                    className="text-input"
                    placeholder="message"
                ></textarea>
                <button type="submit" className="submit-button">
                    send
                </button>
            </form>
        </div>
    )
}
export default TextBox;

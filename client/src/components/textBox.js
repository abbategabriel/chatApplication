import React, { useState } from "react";
import { sendMessage } from "../utils/msgApi";

function TextBox() {

    const [newMessage, setNewMessage] = useState("");
    const [userId, setUserId] = useState();
    const [targetId, setTargetId] = useState();


    const handleSend = () => {
        //not implemented 
        
        const obj = {
            "id": 1, 
            "msg": newMessage,
            "sender": 1,
            "target": 1
        };
        console.log(`calling api with message ${obj}`);
        sendMessage(obj);
        
    };

    //public record Message(int Id, string Msg, int Sender, int Target);
    return (
        <div>
            <form className="text-input-form" onSubmit={(event) => handleSend()}>
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
// class Message {
//     // public record Message(int Id, string Msg, int Sender, int Target);
//     constructor(id, msg, sender, target) {
//         this.id = id;
//         this.msg = msg;
//         this.sender = sender;
//         this.target = target;
//     }
// }
export default TextBox;

import React, { useState } from "react";

function TextBox() {

    const [newMessage, setNewMessage] = useState("");

    function handleSend() {
        //not implemented 
    }

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

export default TextBox;
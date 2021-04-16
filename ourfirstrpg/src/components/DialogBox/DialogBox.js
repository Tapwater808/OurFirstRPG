import React, { useState } from "react";

import "../DialogBox/dialogBox.css"

const messages = [
    "This is a test",
    "Dammit",
    "I've been banned from Dave & Busters"
];

const DialogBox = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else {
            setCurrentMessage(0);
        }
    };

    return (
        <div className="DialogWindow">
            <div className="DialogTitle">Beans</div>
            <div className="DialogText">{messages[currentMessage]}</div>
            <div onClick={handleClick} className="DialogFooter">
                --{`>`}
            </div>
        </div>
    );
};

export default DialogBox;
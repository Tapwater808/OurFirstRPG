import React, { useState } from "react";
// import ReactDOM from 'react-dom';

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
            setIsVisible(false);
            setCurrentMessage(0)
        }
    };

    const [isVisible, setIsVisible] = React.useState(false)
    const onClick = () => setIsVisible(true)

    return (
        <>
        <button className="DialogButton" onClick={onClick}>Show Dialog</button>

        <div className="container">
        </div>
        <div className={ isVisible ? 'DialogWindow2' : 'DialogWindow'}>
            <div className="DialogTitle">Beans</div>
            <div className="DialogText">{messages[currentMessage]}</div>
            <div onClick={handleClick} className="DialogFooter">
                --{`>`}
            </div>
        </div>
        </>
    );
};

export default DialogBox;
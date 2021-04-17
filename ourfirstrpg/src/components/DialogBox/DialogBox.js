import '../DialogBox/dialogBox.css'

// const name = 'Buckaroo';

// const messages = [
//     'This is a test',
//     'Dammit',
//     "I've been banned from Dave & Busters"
// ];

const DialogBox = ({
    isVisible,
    setIsVisible,
    currentMessage,
    setCurrentMessage,
    name,
    messages
}) => {
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else {
            setIsVisible(false);
            setCurrentMessage(0)
        }
    };

    const onClick = () => setIsVisible(true)

    return (
        <>
        <button className='DialogButton' onClick={onClick}>Show Dialog</button>

        <div className='container'>
        </div>
        <div className={ isVisible ? 'DialogWindow2' : 'DialogWindow'}>
            <div className='DialogTitle'>{name}</div>
            <div className='DialogText'>{messages[currentMessage]}</div>
            <div onClick={handleClick} className='DialogFooter'>
                --{`>`}
            </div>
        </div>
        </>
    );
};

export default DialogBox;
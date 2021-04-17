import '../DialogBox/dialogBox.css'
// const name = 'Buckaroo';

// const messages = [
//     'This is a test',
//     'Dammit',
//     "I've been banned from Dave & Busters"
// ];
const DialogBox = ({isVisible, name, message}) => {
    return (        
        <div className={ isVisible ? 'DialogWindow2' : 'DialogWindow'}>
            <div className='DialogTitle'>{name}</div>
            <div className='DialogText'>{message}</div>
            <div className='DialogFooter'>
                --{`>`}
            </div>
        </div>
    );
};

export default DialogBox;
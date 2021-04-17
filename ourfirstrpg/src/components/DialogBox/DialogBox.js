import "../DialogBox/dialogBox.css"

const DialogBox = ({isVisible, name, message}) => {
    return (
        <div className={ isVisible ? 'DialogWindow2' : 'DialogWindow'}>
            <div className="DialogTitle">{name}</div>
            <div className="DialogText">{message}</div>
            <div className="DialogFooter">
                --{`>`}
            </div>
        </div>
    );
};

export default DialogBox;
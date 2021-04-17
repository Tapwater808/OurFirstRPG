import "../DialogBox/dialogBox.css"

const name = "Buckaroo";

const DialogBox = ({message, isVisible}) => {
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
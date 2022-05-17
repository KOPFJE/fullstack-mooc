const NotificationMessage = (props) => {

    if(props.msg.type === "none") {
        return null;
    } else {
        return(
            <div className={props.msg.type}>
                { props.msg.text }
            </div>
        );
    }
};

export default NotificationMessage;
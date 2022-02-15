import PropTypes, { objectOf } from 'prop-types';


const MessageList = (props) => {

    const messageJSX = props.incomingMessage.map(
        obj => <li key={obj.id}>{obj.msg}</li>
    )

    return(
        <ul>
            {messageJSX} 💕
        </ul>
    )
};

MessageList.defaultProps = {
    incomingMessage : []
};

MessageList.propTypes = {
    incomingMessage: PropTypes.arrayOf(// un tableau de chaîne de caractère
        PropTypes.exact({ //exact permet de lors du typage qu'on dit qu'il y a une array avec les composant exact. Sinon il y a "shade" qui dit qu'il doit au moin contenir ces deux là, mais aussi d'autre. 
            msg: PropTypes.string,
            id: PropTypes.string.isRequired
        })
    )
};

export default MessageList;
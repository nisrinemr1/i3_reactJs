import MessageForm from "../../components/message-form/message-form"
import MessageList from "../../components/message-list/message-list";
import { useMessage } from "../../hooks/messages-hook";

const MessageContainer = () => {

    const [messages, handleAdd, handleDelete, handleDeleteAll] = useMessage();
    //mettre en dernier ce qu'on utilise pas.

    return(
        <main>
            <h1>Message...</h1>
            <MessageForm onSendMsg={handleAdd} />
            {messages.length > 0 && ( //si le message est supérieur à 0, donc button s'affiche.
                <button onClick={handleDeleteAll}>Vider la liste de message</button>
            )}
            <MessageList incomingMessage={messages} />
        </main>
    )
}

export default MessageContainer
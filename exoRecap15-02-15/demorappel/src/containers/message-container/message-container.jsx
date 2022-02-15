import { useState } from "react"
import MessageForm from "../../components/message-form/message-form"
import MessageList from "../../components/message-list/message-list";
import {nanoid} from 'nanoid';

const MessageContainer = () => {

    const [messages, setMessages] =useState([]);

    const handleNewMessage = (msg) =>{

        const newMsg = {
            msg: msg,
            id: nanoid()
        };
        //utilisation du concat ou le spread pour ajouter un element dans le tableau des messages
        
        setMessages(messages => [newMsg, ...messages]); // ajout du message en 1er element.
        //setMessages(messages => [newMsg].concat(messages)); La méthode sans les ... 
        // setMessages(messages => [].concat(msg).concat(messages));
    }

    return(
        <main>
            <h1>Message...</h1>
            <MessageForm onSendMsg={handleNewMessage} />
            <MessageList incomingMessage={messages} />
        </main>
    )
}

export default MessageContainer
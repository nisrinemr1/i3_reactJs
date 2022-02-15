import { useState } from "react";
import PropTypes from 'prop-types';

const MessageForm = (props) => {

    const [msgInput, setMsgInput] = useState('');

    //méthode de réaction au submit du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();//empêche le refraîche de la page. 

        props.onSendMsg(msgInput); //communication montante du contenu du msgInput
        setMsgInput(''); // pour vider le setMsgInput
    }

    return(
        <form onSubmit={handleSubmit}> {/* permet à l'utilisateur d'utiliser le btn enter! */}
            <input type="text" 
                onChange={(e) => setMsgInput(e.target.value)}/* relier le text et l'état dans msgInput */
                value={msgInput} /* la valeur de l'input sera toujours la même que celui du state!  */
            />
            <button type="submit">Ajouter</button>
        </form>
    )
};

//définir les valeurs par défault des Props
MessageForm.defaultProps= {
    onSendMsg: () => {} //noop NO OPeration 
};

//définir le typage des props (-> PropTypes)
MessageForm.propTypes = {
    onSendMsg: PropTypes.func
}

export default MessageForm;
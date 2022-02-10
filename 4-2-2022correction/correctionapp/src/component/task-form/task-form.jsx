//props pour la communcation avec son parent! Donc il en aura besoin! 
import style from './task-form.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

const TaskForm = (props) => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [prio, setPrio] = useState('normal');

    const handleSubmit = (e) => {
        e.preventDefault();

        //name:name il prendra ce qu'il y a dans le state.
        //contenir toutes les données à envoyer. 
        const data = {
            // id: nanoid(),
            name, 
            desc,
            priority: prio,
            // isFinish: false
        }
        //envoie à la todoApp. On va donc déclancher l'evenement.
        props.onNewTask(data); 
        //exploiter la focntion onNewTask et l'envoyer

        //reset du formulaire
        setName('');
        setDesc('');
        setPrio('normal');

    }

    return(
        <> 
        <h2>Nouvelle tâche</h2>
        <form className={style.formTask} onSubmit={handleSubmit}>
            <div className={classNames(style.inputUser, style.inputName)}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" required
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={classNames(style.inputUser, style.inputDesc)}>
                <label htmlFor="desc">Description</label>
                <textarea id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
            <div className={classNames(style.inputUser, style.inputPrio)}>
                <label htmlFor="prio">Priorité</label>
                <select id="prio" value={prio}
                    onChange={(e) => setPrio(e.target.value)}>
                    <option value="high">Urgent</option>
                    <option value="normal">Normal</option>
                    <option value="low">Basse</option>
                </select>
                <div className={style.actionSubmit}>
                    <button type="submit">Ajouter</button>
                </div>
            </div>
        </form>
        </>
    )
};

TaskForm.defaultProps = {
    onNewTask: () => {} //noop pas loop! Valeur par défautl. Donc pas d'opération il ne fera rien.
}

TaskForm.propTypes = {
    onNewTask: PropTypes.func //l'event "onNewTask" est de type function!
}

export default TaskForm;
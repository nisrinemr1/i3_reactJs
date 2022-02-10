import { useState } from 'react';
import style from './todo-list.module.css'
import { nanoid } from 'nanoid';
import { number } from 'prop-types';

const TodoForm = (props) => {
    const { hintDesc, hintNom } = props;

    const [nomTache, setNomTache] = useState('');
    const [descTache, setDescTache] = useState('');
    const [importance, setImportance] = useState('bas');

    const handleSubmit = (e) => {
        //pour ne pas rafraîchir la page à chaque fois qu'on clique sur le submit
        e.preventDefault();

        //envoie de l'event
        const data = {
            id: nanoid(),
            nom: nomTache,
            desc: descTache,
            priority: importance
        };

        //ce qui va permettre de faire le lien avec le TodoForm dans le fichier app.js! 
        props.onAddTask(data);

        //pour vider le formulaire apès le clique. 
        setNomTache('');
        setDescTache('');
        setImportance('bas');
    }

    return (
        <div>
            <div className={style.myTodoList}>
                <h2> Des choses à faire?</h2>
                <form onSubmit={handleSubmit} className={style.myForm}>
                    <div>
                        <label htmlFor="nomTache"> Nom : </label>
                        <input placeholder={hintNom} type="text" onChange={(e) => setNomTache(e.target.value)} value={nomTache} />
                    </div>
                    <div>
                        <label htmlFor="descTache"> Description : </label>
                        <input placeholder={hintDesc} type="text" onChange={(e) => setDescTache(e.target.value)} value={descTache} />
                    </div>
                    <label htmlFor=""> Niveau de priorité?</label>
                    <select id="importance" onChange={(e) => setImportance(e.target.value)} value={importance}>
                        <option value="urgent">Urgent</option>
                        <option value="normal">Normal</option>
                        <option value="bas">Bas</option>
                    </select>
                    <div>
                        <input type="submit" value="Ajouter" disabled={nomTache === ''} />
                    </div>
                </form>
            </div>
        </div>
    )
};

TodoForm.defaultProps = {
    hintNom: '',
    hintDesc: '',
    onAddTask: () => { },
}

export default TodoForm;
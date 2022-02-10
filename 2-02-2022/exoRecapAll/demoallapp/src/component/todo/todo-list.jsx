import style from './todo-list.module.css'
import classNames from 'classnames';
import PropTypes from 'prop-types';


const TodoList = (props) => {

    const { onFinishTask, onDeleteAll, onDeleteTask } = props;

    const listeJSX = props.liste.map(elem => {

        const styleTask = classNames({
            [style.taskDone]: elem.isFinish
        })

        return (
            <div className={styleTask} key={elem.id}>
                <h3>{elem.nom} {(elem.priority === "urgent") && <span className={style.urgent}>(Urgent)</span>}</h3>
                {/* Si la priorité est urgent, il affiche le span Urgent. Pas besoin du else vu qu'on utilise le && */}
                <p>{elem.desc}</p>
                <div>
                    <input type="button" value="Terminer" onClick={() => onFinishTask(elem.id)} disabled={elem.isFinish} />
                    <input type="button" value="Supprimer" onClick={() => onDeleteTask(elem.id)} />
                    {/* pour supprimer l'id */}
                </div>
            </div>
        );
    })
    console.log(props.liste)
    console.log("on m'a lus")
    /* parce que ma liste est dans la props qui va le recup depuis l'app */

    return (
        <div>
            <div className={style.myList}>
                <h2>Petite Todo liste 🤎: </h2>
                <ul>
                    {listeJSX}
                </ul>
                <input type="submit" value="Supprimer tout" onClick={onDeleteAll} />
            </div>
        </div >
    )
};


TodoList.defaultProps = {
    liste: [],
    onModifyStateTask: () => { },
    onDeleteTask: () => { },
    onDeleteAll: () => { },
}

TodoList.propTypes = {
    liste: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    onFinish: PropTypes.func,
    onDelete: PropTypes.func
}

export default TodoList;
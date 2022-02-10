//squelette de la tâche
import PropTypes from 'prop-types';
import style from './task-list-item.module.css';
import classNames from 'classnames';

const TaskListItem = (props) =>  {
    const {id, name, desc, priority, isFinish}= props;
    //recup des évent à afficher

    //recup des event à envoyer
    const {onFinish, onDelete} = props;

    //definition du style pour une tâche via "classnames" car il en aura deux
    const styleTask = classNames({
        [style.task]: true,
        [style.isDone] : isFinish
    })


    
    //doit mettre une div pour appliquer quelque chose au dessus de la tâche
    return(
        <div className={styleTask}>
            <div className={style.taskInfo}>
                <h3>{name} {(priority === 'high')&& <span className={style.urgent}>(Urgent)</span>}</h3>{/* Si la priorité est high il affiche le span. Pas besoin du faux. d'ou le && */}

                {/* si pas de description. */}
                {(desc !== '')? (
                    <p>{desc}</p>
                ) : (
                    <p>Aucune description...</p>
                )}
            </div>
            <div className={style.taskAction}>
                <button disabled={() => onFinish(id)} disabled={isFinish}>Terminer</button> {/* comme isFinish === true */}
                <button onClick={() => onDelete(id)}>Supprimer</button>{/*  */}
            </div>

        </div>
    )
}

//valeur par defaut vu que quand on recupere on recup la fonction. 
TaskListItem.defaultProps = {
    onFinish: () => {},
    onDelete: () => {}
}

//recuperer les nom, la desc et la prio. C'est juste pour nous aider! 
TaskListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
    onFinish: PropTypes.func,
    onDelete: PropTypes.func
}

export default TaskListItem;
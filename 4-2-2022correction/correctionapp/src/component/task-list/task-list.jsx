//va recevoir la liste des tâches. Ici il y aura le defaut props avec un tableau vide
import PropTypes from 'prop-types';
import TaskListItem from './task-list-item';
import style from './task-list.module.css'

const TaskList = (props) =>{

    //recuperer les donné pour les afficher. Utilisation de la fonction "map" pour transformer l'array js en array de jsx
    const tasksJSX = props.datas.map(
        //utilisation du composant "item" précédement créé.
        task => <TaskListItem {...task} key={task.id} 
            onDelete={props.onDeleteTask} 
            onFinish={props.onFinishTask} //faire remonter au todo app
            />
    );

    return(
        <div className={style.listApp}>
            <h2>Liste des tâches</h2>

            <div class={style.listContent}>
                {tasksJSX}
            </div>
        </div>
    )
};

TaskList.defaultProps = {
    datas: [],
    onDeleteTask: () => {},
    onFinishTask: () => {}
};

TaskList.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape({/* arrayof est que je veux une array et je veux y mettre une consigne en voulant un type de truc précis et je veux que ce soit un objet qui contient au moins un id */
        id: PropTypes.string.isRequired 
    })),
    onDeleteTask: PropTypes.func,
    onFinishTask: PropTypes.func
};

export default TaskList;
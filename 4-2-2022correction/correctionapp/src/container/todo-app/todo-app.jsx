import { nanoid } from "nanoid";
import { useState } from "react";
import TaskForm from "../../component/task-form/task-form";
import TaskList from "../../component/task-list/task-list";

const TodoApp = () => {
    //faire une fonction de l'auto incrementation si on aurait mit nous même l'id et qu'il ajoute a chaque fois. 

    //Définition d'un state qui contiendra les données. Qui contiendra une liste vide Puis ajout de la new tache dans la liste des taches. avec la concat
    const [tasks, setTasks] = useState([]);

    //cas ou isFinish est dedans. 
    // const handleNewTask = (newTask) =>{
    //     console.log(newTask);
    // }

    // cas ou Finish est pas dedans:
    const handleNewTask = (data) => {
        //ajout du isFinish et du nanoid
        const newTask = {
            ...data,
            id: nanoid(),
            isFinish: false
        }

    //ajout de la nouvelle tache dans la liste des tâches: pas les meme tasks que dans le state!! 
    setTasks(taskElements => [newTask, ...taskElements]);
    }

    const handleDeleteTask = (id) => {
        //mise à jour de la liste des tâche
        //on va obtenir une copie de notre liste ciblé mais sans l'element.
        setTasks(taskElements => taskElements.filter(t => t.id !== id));
        //eciture a l'ancienne: 
        //setTasks(function (taskElements) { return taskElements.filter(function (t) { return t.id !== id; }); });        
    }

    const handleFinishTask = (id) => {
        //mise a jour de la liste des tâches. 
        //Via le map, on va transformer les données pour valider de "isFinish" de l'element ciblé

        setTasks(taskElements => taskElements.map(task =>(task.id !== id) ? task : {...task, isFinish: true}));
        //  Dans le map : L'operateur ternaire permet de définir si on est sur l'element recherche
        //   - si l'id ne correspond pas, on ne modifie l'objet de la collection
        //   - si l'id correspond, on utilise la décomposition pour mettre à jours les données de la cible.


        // ↓ Ecriture alternative (Sans utiliser le map)
        // setTasks(taskElements => {
        //     const result = [];
        //     for(const task of taskElements) {
        //         if(task.id !== id) {
        //             result.push(task);
        //         }
        //         else {
        //             const taskUpdate = {... task, isFinish: true};
        //             result.push(taskUpdate);
        //         }
        //     }
        //     return result;
        // });

    }


    return (
        <main>
            <TaskForm onNewTask={handleNewTask} />

            {/* on doit lui donner un paramètre qui va avoir la liste des taches donc les tasks*/}
            <TaskList datas={tasks}
                onDeleteTask={handleDeleteTask}
                onFinishTask={handleFinishTask}/>
        </main>
    )
}

export default TodoApp;
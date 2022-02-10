import './App.css';
import TodoList from './component/todo/todo-list';
import TodoForm from './component/todo/todo-form';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { checkPropTypes } from 'prop-types';


function App() {

  const [tasks, setTasks] = useState([]);

  //Quand on ajouteras la tâche, on ajoutera le finish dans le tableau qui le mettra false directement. 
  const handleAddTask = (data) => {
    console.log('Coucou je suis l\' ajouuuuut');
    //ajout du is finish dans le tableau. 
    const newTask = {
      ...data,
      isFinish: false
    }

    //permet d'ajouter la nouvelle tâche ! :D
    setTasks(taskElements => [newTask, ...taskElements]);
  }

  const handleFinishTask = (id) => {

    console.log('test absyi dbasb dhkasbf kadbf aisub fkjasb fkjsfb');
    //mise a jour de la liste des tâches. 
    //Via le map, on va transformer les données pour valider de "isFinish" de l'element ciblé

    setTasks(taskElements => taskElements.map(task => (task.id !== id) ? task : { ...task, isFinish: true }));

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

  const handleOnDeleteTask = (id) => {
    console.log(id);
    //   - si l'id ne correspond pas, on ne modifie l'objet de la collection
    //   - si l'id correspond, on utilise la décomposition pour mettre à jours les données de la cible.
    setTasks(taskElements => taskElements.filter(t => t.id !== id))
    /* Refait une liste en prenant pas ce qui a été chosis */
    //setTasks(function (taskElements) { return taskElements.filter(function (t) { return t.id !== id; }); }); 
  }

  //une autre manière pour vider la liste en sois. 
  const handleDeleteAll = () => {
    setTasks(tasks => []);
    console.log('suuuupprimééé')
  }

  return (
    <div className="App">
      <h1 className='rainbow-text'>Best TodoListe Ever 🤎</h1>
      <TodoForm hintNom="Nom de la tâche"
        hintDesc="Description de la tâche"
        onAddTask={handleAddTask} />

      <TodoList liste={tasks}
        onDeleteTask={handleOnDeleteTask} 
        onDeleteAll={handleDeleteAll}
        onFinishTask = {handleFinishTask}/>
    </div>
  );
}

export default App;

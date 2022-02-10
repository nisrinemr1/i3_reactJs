import { useState } from "react";
import {nanoid} from 'nanoid';
import { element } from "prop-types";

const ManipulationTableau = () => {

    //avant on hardcodait le tableau. Vu qu'on a vu les usestate, on peut tout stocker dedans, même des tableaux. 

    const [elements, setElements] = useState([
        {id: nanoid(), msg:'Demo', time: new Date()}
    ])

    const elementJSX = elements.map(
        elem => <li key={elem.id}>
            {elem.msg}
            {elem.time.toLocaleTimeString('fr-BE')}
        </li>
    )

    const handleAddElement = (newTask) => {
        //si on click pour ajouter après. Si ça aurait été avant ça aurait été 

        //mettre un console.log() pour voir ce qu'il 

        //pour modif le state (OBLIGATOIRE!) et on doit le modifier dans SETELEMENT!
        const newElement = {id: nanoid, msg:'Add', time: new Date()};
        /* element.push(newElement);  *///il va donner la longuer element du tableau le push. Si on met setElement, il va planter. 
        //pour cela il faut une méthode qui va permettre de modifier le tableau: Spread!(premier pdf react!) y a spread et concat.
        /* console.log(elements); */

        //du coup là il va concaténé l'ancienne et la nouvelle valeur! Methode concat 
        /* setElements(elem => elem.concat(newElement)); */

        //methode spread
        setElements(elem => [...elem, newElement]);
        setElements(elem => [ newElement, ...elem]);
    }

    //faire l'ajout, puis la suppression et supprimer toute la liste puis voir comment faire pour que la tâche se supprime quand il est fait! 
    return (

        <div>
            <button onClick={handleAddElement}>Ajouter un élément</button>
            <ul>
                {elementJSX}
            </ul>
        </div>
    )
}

export default ManipulationTableau;
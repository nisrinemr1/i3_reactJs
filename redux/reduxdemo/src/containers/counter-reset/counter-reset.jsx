

//export avant le const il va juste exporter le composant

import { useDispatch } from "react-redux";
import { reset } from './../../store/actions/counter-action';

    // Récupération de la méthode pour interagir avec le dispatcher 
const CounterReset = () => { 
    const dispatch = useDispatch();

    const handleReset = () => {
        //Envoie de l'objet d'action "reset"
        dispatch(reset()); //action vers dispatcher
    }

    return(
        <button onClick={handleReset}>Reset</button>
    );
};

export default CounterReset;
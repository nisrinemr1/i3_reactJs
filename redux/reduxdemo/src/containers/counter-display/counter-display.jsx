import { useSelector } from "react-redux";


const CounterDisplay = () => {

    //recup la valeur du store. Hook useSelectore à été créer par redux
    const count = useSelector(state => state.counter.count);//dire l'endroit ou il est. En fonction du state du store, il se trouve dans state.counter.count.
    const msg = useSelector(state=> state.counter.msg);

    return(
        <p>Compteur : {count}({msg})</p>
    );
};

export default CounterDisplay;
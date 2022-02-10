import { useState } from "react";
import style from './compteur.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Compteur = (props) => {
    // Récuperation de la valeur du "step" dans les props plus bas.
    const {step} = props;


    /* Création d'une variable d'état avec pour valeur initial qui est de 0 */
    // Si on met plusierus hook, l'outil de débug réact dans l'inspecteur, il va juste ecrire State avec avant lui le premier. Mais ne dit pas lequel c'est en mettant le nom de la variable!! 
    const [count, setCount] = useState(0);

    //Incrementation!
    const windowsIncr = () => {
        setCount(c => c + step);
        //le ++ ne fonctionnera pas parce que ici on est pas dans l'affectation direct. Obliger d'utiliser la methode !  
    };

    //Reset 
    const windowsReset = () =>{
        setCount(0);
    }

    /* const styleCompteur = `${(count === 0) ? style.textReset :''} ${style.textSize}` */
    // a la place d'utiliser ça on va le repmplacer avec l'extension npm i classnames pour avoir une ligne plus facile. Autrement ça aurait été complexe.
    const styleCompteur = classNames({
        [style.textSize] : true,
        [style.textReset]: count === 0
    })

    return (<div>
        <p className={styleCompteur}>Le compteur est à  : {count}</p>

        <div>
            <button onClick={windowsIncr}>{step}</button>
            <button onClick = {()=> setCount(c => c - step)}>-{step}</button>{/* autre méthode. Si on retire la parenthèse et la fonction fleché, le site plantera. Si on le retire, il devient une boucle ∞!!! */}
        </div>
        {(count !==0) && (<button onClick={windowsReset}>Reset</button>)}
        {/* Il avec le ? il faudrait obligatoirement mettre un else. && permet de faire une ternaire sans la deuxième partie.  */}
    </div>);
};
//du coup avec l'outil de débug permettra de mettre une valeur depuis l'outil si on a pas pus mettre en place du +1 et -1. Il pourra permette de mettre au state un nombre au pif, puis cliquer sur le reset pour voir s'il fonctionne pas.

Compteur.defaultProps = { /* Erreur typo sera dans le propsType et PropTypes */
    step: 1
}
Compteur.propTypes = {
    step: PropTypes.number.isRequired
}

export default Compteur
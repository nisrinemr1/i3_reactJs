import { useState } from 'react';

/* paramettre d'entrer et c'est sa façon de commencer. Va nous servir à recup des infos et par la suite de communiquer vers son parent. Le composant reservoir est un composant enfant de l'app! Et les props permet de faire la communication entre l'enfant et le parent ! Le state est diff. Il permet à l'element de créer un conteneur de donné. Il faut identifier ou il faudra mettre le state pour la stocker de la manière de la plus adéquate que possible! Pour communiquer si le reservoir est rempli ou vide, on va le mettre dans ce fichier qui va être envoyer vers l'enfant.  vf */
const Reservoir = (props) => {
    const {max} = props; //recup "data"
    const { onReservoirPlein, onReservoirVide } = props; //envoie l'"event"

    const [niveau, setNiveau] = useState(0);

    const handleUp = () => {
        if(niveau < max) {
            //ajout d'un littre.
            setNiveau(n => n + 1);
        }
        else{
            //inidiquer que le reservoir à deborder et va communiquer cela au parent. 
            onReservoirPlein();
            console.log('Event Plein');
        }
    }
    /* Il ne fait pas en temps réelle. Sinon il faudra repenser entièrement le site. */

    const handleDown = () => {
        if(niveau > 0) {
            //retirer un litre
            setNiveau(n => n - 1);
        }
        else{
            //indiquer que le reservoir est vide! On va envoyer quelque chose au parent dont il faut définir plus haut
            onReservoirVide();
            console.log('Event Vide')
        }
    }

    return (
        <div>
            <p>Le niveau du reservoir est de {niveau} sur {max} L</p>
            <button onClick={handleUp}>Ajouter 1L</button>
            <button onClick={handleDown}>Retirer 1L</button>
        </div>
    )
}

Reservoir.defaultProps = {
    max: 10,
    //mettre une loop permet d'eviter des erreurs lorsque l'event n'est pas utiliser. L'app n'utilise pas encore les event. Son fait pas ça, ça va planter. Uncaught TypeError: onReservoirPlein is not a function. Si le parent n'a pas donner de props, cette methode permet d'en avoir une par défaut. Comme si on demande demarrer une voiture, mais pas de voiture
    onReservoirPlein :() => {},
    onReservoirVide : () => {}
}

export default Reservoir;
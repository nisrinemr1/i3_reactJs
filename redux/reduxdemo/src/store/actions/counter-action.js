// Création des constantes pour les actions possibles 

export const COUNTER_INCREMENT = 'counter/increment'; //Categ counter et l'action increment. C'est un nom on peut mettre n'importe quoi. 
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET     = 'counter/reset';


// Création des méthode pour générer les objects "actions"
//pas d'export default car il y aura plusieurs à exporter.

// - Fonction "increment" avec la valeur a augmenter. payload va venir après à ajouter.
export const increment = function(step){
    //envoyer un objet avec l'action. 
    return{//créer un objet
        type: COUNTER_INCREMENT, //le type d'action
        payload: step //données qui accompagnent l'action.
    };
};

// - Fonction fléchée "decrement" avec la valeur a diminuer
export const decrement = (step) =>{
    return{
        type: COUNTER_DECREMENT,
        payload: step //mot clef de la doc redux on peut mettre value.
    };
};

//flemardise mais pour des actions simple. A ne pas utiliser si requêtes ajax. Il renvoie directement l'objet avec l'action
export const reset = () =>({
    type: COUNTER_RESET
});

// - Fonction Flechée (flemmard) "reset"
// export const reset = () =>{
//     //renvoie le type reset
//     return{
//         type: COUNTER_RESET
//     }
// };

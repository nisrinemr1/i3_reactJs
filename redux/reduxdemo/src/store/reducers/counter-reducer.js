import {
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT, 
    COUNTER_RESET
} from './../actions/counter-action';

// Définir l'etat initial
const initialState = {
    count: 0,
    msg: 'initial'
};

//Création de la méthode "reducer" qui peut résoudre des actions 
//recup l'ancien resultat et le transformer. => méthode d'accumulation 
//prend en param 2 chose. Etat du state et la modification par l'action. TOUJOURS METTRE UNE VALEUR INITIAL AU STATE!
export const counterReducer = (state = initialState, action) =>{ //première fois qu'il sera appeler il n'aura pas de valeur initial de state. Et donc il va ajouter une val initial qui est 0, et après 
    //un switch avec les diff actions possible. possible d'utiliser un if mais c'est plus clean un switch
    //type depuis le counter-action!
    switch(action.type){
        case COUNTER_INCREMENT:
            return{
                ...state, //permet de cloner l'objet state pour garder tout ce qu'il connaît. et jamais perdre de valeurs.
                count: state.count + action.payload,
                msg: 'Incrementation'
            };
        case COUNTER_DECREMENT: 
            return{
                ...state,
                count: state.count - action.payload,
                msg: 'Decrementation'
            }
        case COUNTER_RESET : 
            //return initialState; Si je supprime, il met "inital state"
            return{
                ...state, 
                count: 0, //ou 0 tout simplement la valeur initial
                msg: 'Reset' //faire quelque chose de legerement différent. En fait il permet 
            }
        default : 
            return state; //TOUJOURS renvoyer le state dans le default!
    };
};

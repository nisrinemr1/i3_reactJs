import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter-reducer";


const reducer = combineReducers({//creaction d'une autre methode dispo dans redux
    //definition du nom des catégories.
    counter: counterReducer, //qui contiendra la catégorie count.
    // product: productReducer, //reconnait pas vu qu'on ne les a pas créer.
    // weather: weatherReducer 

});

export default createStore(reducer);

//ne reste plus qu'a ajouter la vue et la fleche du state vers la vue!

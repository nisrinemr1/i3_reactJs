//importation des reducers qu'on à générer
import { productReducer } from "./reducers/product-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';

//on crée une "grosse" variable pour réunier les différents reducers
const reducer = combineReducers({
    productCategory: productReducer
});

//export default createStore(reducer, applyMiddleware(reduxThunk)); autre manière
//Création du store, sur base du reducer global 
// => Ajout du middleware "redux-thunk"
const store = createStore(reducer, applyMiddleware(reduxThunk));

//exporter le store qui sera par la suite diffuser dans l'app!!!
export default store;
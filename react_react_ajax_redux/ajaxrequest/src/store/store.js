import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import reduxThunk from 'redux-thunk';

//importation des reducers qu'on à générer
import { productReducer } from "./reducers/product-reducer";
import { weatherReducer } from "./reducers/weather-reducer";

//on crée une "grosse" variable pour réunier les différents reducers
const reducer = combineReducers({
    productCategory: productReducer,
    weatherCategory: weatherReducer
});

//export default createStore(reducer, applyMiddleware(reduxThunk)); autre manière
//Création du store, sur base du reducer global 
// => Ajout du middleware "redux-thunk"
const store = createStore(reducer, applyMiddleware(reduxThunk));


// const store = createStore(reducer, applyMiddleware(reduxThunk), 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


//exporter le store qui sera par la suite diffuser dans l'app!!!
export default store;
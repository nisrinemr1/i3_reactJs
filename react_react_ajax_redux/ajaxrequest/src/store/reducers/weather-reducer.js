import { WEATHER_LOADING, WEATHER_RESULT, WEATHER_ERROR } from './../actions/weather-action';

//initialisation des données! 
const initialWeatherState = {
    data: null,
    isLoading: false, //par défaut on ne fais pas de recherche
    errorMessage: null
}

export const weatherReducer = (state = initialWeatherState, action) => {
    
    switch(action.type) {
        case WEATHER_LOADING: 
            return{
                ...state,
                isLoading: true,
                data: null,
                errorMessage: null
            };
        case WEATHER_RESULT: 
            return{
                ...state,
                data: action.payload,
                isLoading: false
            };
        case WEATHER_ERROR:
            return{
                ...state,
                errorMessage: action.payload,
                isLoading: false
            };
        default: 
        return state;
    }
}
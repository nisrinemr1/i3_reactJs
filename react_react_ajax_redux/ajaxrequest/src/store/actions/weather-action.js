import axios from "axios";
import axions from "axios";

// Les types d'actions possible (Gérer par le reducer)
// export const WEATHER_SEARCH = 'weather/search'; On aura plus besoin parce que c'est une méthode complex qui fait les autres trucs!. Elle ne sert à rien!!! 
export const WEATHER_LOADING = 'weather/loading';
export const WEATHER_RESULT = 'weather/result';
export const WEATHER_ERROR = 'weather/error';


// Méthode pour créer les objets actions

export const loadingWeather = () =>({
    type: WEATHER_LOADING
});

export const errorWeather = (message) =>({
    type:WEATHER_ERROR,
    payload: message
    //données utile qui accompagne l'action!
    //pour qu'il y ait plusieurs messages d'erreur
});

export const resultWeather = (result) =>({
    type: WEATHER_RESULT,
    payload: {
        name: result.name,
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    }
});

// Méthode pour rechercher la météo via axios (et necessite Redux-thunk) //si city n'est pas correct ça ne sert à rien 
export const searchWeather = (city) => {

    //si reconnaît pas la ville, mais c'est la première méthode. Le mien est de mettre dans une seule fonction! 
    // if(!city){
    //     return errorWeather('Ville non défini!');
    // }

    //envoie d'une fonction qui sera traité via Redux-Thunk
    return(dispatch) =>{

        if(!city){
            dispatch(errorWeather('Ville non défini!'));
            return;
        }
        
        //Déclancher l'action 'LOADING'
        dispatch(loadingWeather());

        //requête ajax 
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            //https://axios-http.com/docs/req_config la doc!!!!!
            // on coupe cet url http://api.openweathermap.org/data/2.5/weather?q=Bruxelles&appid=c3fa448b20d4333b499f552522c429d3&units=metric&lang=fr. Axios va tout concaténé sans qu'on se prenne la tête à concaténé!!!!!! 
            //http://api.openweathermap.org/data/2.5/weather
            // ?q=Bruxelles
            // &appid=c3fa448b20d4333b499f552522c429d3
            // &units=metric
            // &lang=fr
            //différent paramètre de notre api
            params: {
                q: city,
                appid: 'c3fa448b20d4333b499f552522c429d3',
                units: 'metric',
                lang: 'fr'
            }
        }).then(response =>{
            //déclancher l'action result avec le dispatch
            dispatch(resultWeather(response.data));
        }).catch(error => {
            //customiser le message! On test, si c'est 404 on met ville non trouvé, sinon requete échoué!
            const errorMessage =(error.response.status === 404) ?
                                    'Ville non trouvé': 'Requete échoué :(';

            //Declancher l'action 'error'
            dispatch(errorMessage(errorMessage))
        })

    }
}


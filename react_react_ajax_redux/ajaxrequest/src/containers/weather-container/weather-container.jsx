
import { useDispatch, useSelector } from "react-redux";
import ErrorScreen from "../../components/error-screen/error-screen";
import LoadingScreen from "../../components/loading-screen/loading-screen";
import SearchBar from "../../components/searchbar/searchbar";
import WeatherDisplay from "../../components/weather-display/weather-display";
import { searchWeather } from "../../store/actions/weather-action";


//on aura besoin des usedispatch et useSelector!
const WeatherContainer = () =>{
    const dispatch = useDispatch();
    //recup data, errorMessage et isLoading
    const data = useSelector(state => state.weatherCategory.data);
    const errorMessage = useSelector(state => state.weatherCategory.errorMessage);
    const isLoading = useSelector(state => state.weatherCategory.isLoading);

    const handleSearch = (city) =>{
        // Envoyer l'action qui permet de faire la requête AJAX! 
        dispatch(searchWeather(city))
    }

    return(
        <div>
            <h2>Recherche la météo</h2>
        <SearchBar onResult={handleSearch}/>
        {isLoading ? (
            <LoadingScreen />
        ): errorMessage ? (
            <ErrorScreen message={errorMessage}/>
        ): data != null &&(
            <WeatherDisplay {...data} />
        )}
        </div>
    );
};

export default WeatherContainer;
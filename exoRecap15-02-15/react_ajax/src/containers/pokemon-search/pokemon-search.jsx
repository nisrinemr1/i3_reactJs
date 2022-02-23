import { useState } from "react";
import axios from "axios";
import Pokemon from "../../components/pokemon/pokemon";
import LoadingScreen from "../../components/loading-screen/loading-screen";

const PokemonSearch = () =>{
    //initialisation des variable d'états pour la requete
    const [isLoading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [pokemonData, setPokemonData] = useState(null);


    //methode qui lance la requete ajax 
    const handleSearchPokemon = () => {
        //remise à zéro du state
        setLoading(true);
        setErrorMessage('');
        setPokemonData(null);

        // envoierequete ajax iciiiiii
        axios.get('https://pokeapi.co/api/v2/pokemon-species/725')//si habitat n'existe pas, il ne l'affiche pas
            .then(response => {
                const data = {
                    name: response.data.name,                     
                    legendary: response.data.is_legendary,                    
                    habitat: response.data.habitat?.name,                     
                    captureRate: response.data.capture_rate,                     
                    flavorText: 'TODO!'
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return(
        <main>
            <h1>Demo Ajax - Recherche de pokemon</h1>

            <button onClick={handleSearchPokemon}>Rechercher un pokemon</button>
            {isLoading ? ( // if isLoading? 
                <LoadingScreen /> //show up the load screen
            ) : errorMessage ? ( //else if errror message
                <h2>{errorMessage}</h2> // shows up an error message
            ) : pokemonData !== null && ( //ternaire pokemonData is different than null
                <Pokemon {...pokemonData} /> // TODO! ???? A DEMANDER! 
            )}
        </main>
    )
};

export default PokemonSearch
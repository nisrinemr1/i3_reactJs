import { useState } from "react";

const SearchBar = (props) => {
    const {hint, onSearch} = props;

    const [query , setQuery] = useState('');

    const handleSubmit = (e) => {
        //pour pas qu'il refraiche la page
        e.preventDefault();

        //On envoie l'event
        onSearch(query);

        //on reset le formulaire
        setQuery('');
        
    }

    return(
        /* pour que le submit */
        <form onSubmit={handleSubmit}>
            {/* pour le mettre dans le state! */}
            <input placeholder={hint} type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
            <input type="submit" value ="Recherche" disabled={query === ''}/>
        </form>
    )
}
/* hint = placeholder. Props pour mettre quelque chose dans le place holder;*/
//definir la props onSearch pour que quand on click le submit on va envoyer le query
SearchBar.defaultProps = {
    hint : '',
    onSearch : () => {}
}

export default SearchBar;
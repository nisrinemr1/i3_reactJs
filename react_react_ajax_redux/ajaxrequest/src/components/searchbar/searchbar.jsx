import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const SearchBar = (props) =>{
    const {submitName} = props;
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    /* 
    Brieve description des elements du "useForm"
        -handleSubmit est une methode qui va permettre de gerer le submit ainsi que les data. (preventDefautl)
        -resigster: permet d'effectuer le lien du state react et celle du formulaire.
        -reset: Permet de délancher un "reset" du formulaire.
        -formState : {errors} permet d'obtenir des infos sur l'état actuel du formulaire(les erreurs, par exemple)
    */

    const handleSearch = (data) =>{
        console.log(data);
        props.onResult(data.content);
        reset();
    }

    return(
        <form onSubmit={handleSubmit(handleSearch)}>
            <input type="text" {...register("content", {required: true})}/>
            {/* register est leurs methode qui va automatiquement un value et etc. */}
            <button type="submit">{submitName}</button>
            {errors.content && <div>Tu as oublier un truc!</div>}
        </form>
    )
};

SearchBar.defaultProps = {
    submitName: 'Rechercher',
    onResult: () => {} //NOOP
}

SearchBar.propTypes = {
    submitName: PropTypes.string,
    onResult: PropTypes.func
}

export default SearchBar;
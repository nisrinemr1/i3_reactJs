import PropTypes from 'prop-types';

//si je veux mettre un background image : const style = { backgroundImage: `url(${della})`}. Mais ça c'est css in js mais il faut l'eviter le plus que possible! 

const Presentation = ({nom, age}) => {
    //pour eviter d'écrire à chaque fois la ligne du dessous:
    /* const { nom, age } = props; */

    return (
        //pas possible de retirer la div. on peut simplement mettre <> et en fin </>
        <div>
            <h1>Welcome {nom} in the React app!</h1>
            <p>Your age : {age}</p>
        </div>
    )

}

Presentation.defaultProps = { 
    //pas mettre le nom comme valeur par défaut parce que si je met require to string, meme si le nom est un chiffre, il va tout de même afficher sans mettre le message d'alerte.
    age: 20
}

Presentation.propTypes = {
    age : PropTypes.number.isRequired,
    nom : PropTypes.string.isRequired
}

export default Presentation;
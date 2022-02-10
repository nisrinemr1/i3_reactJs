/* importer avec un P maj le prop type!! */
import PropTypes from 'prop-types';
/* import fichier css */
import style from './message.module.css'

const Message = (props) => {
    const {author, content} = props;

    return(
        <div className={style.element}>
            <p className={style.author}>Auteur: {author}</p>
            <p className={style['content-message']}>{content}</p>
        </div>
    )
}

//ajouter des valeurs par départ comme ça s'il n'ya rien il ajoutera automatiquement
Message.defaultProps = {
    author: 'Incognito'
}

/* typer pour qu'il mette une erreur quand on met un chiffre dans l'autheur. Il va crier dans la console*/
Message.propTypes = {
    author : PropTypes.string,
    content: PropTypes.string.isRequired
}

export default Message;
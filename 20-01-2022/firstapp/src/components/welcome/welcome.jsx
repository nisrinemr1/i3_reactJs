/* Les noms des composants sont toujours en maj */
import React from 'react'; /* version class! de la biblio react */

const Welcome = (props) => {
    /* props est le paramètre d'entrée du composant */
    /* permet d'interagir avec les attributs */
    const {name} = props;

    return(
        <h1>Bienvenue {name}</h1>
    );
}

/* Equivalent du composant en version "class"  */
class WelcomeClass extends React.Component {  
    render() {
        const {name} = this.props;
        return (
            <h1>Bienvenue {name}</h1>
        );
    }
}

export default Welcome; 
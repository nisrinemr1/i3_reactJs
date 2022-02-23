import style from './header.module.css';
import moment from 'moment';
//dans node_module il y a moment et puis il y a la local
import 'moment/locale/fr';

// une foncition 
const Header = () => {

    const today = moment().format("DD MMMM")


    return(
        <header className={style.header}>

            {/* ecriture jsx! */}
            <p>Coucou les cacahuètes</p>
            <p>{today}</p>
        </header>
    );
}

export default Header;
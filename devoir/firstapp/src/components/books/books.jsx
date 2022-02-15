import style from './books.module.css';
import PropTypes from 'prop-types';

import first from './images/first.jpg';
import second from './images/third.jpg';
import third from './images/forth.JPG';
import fourth from './images/fifth.png';
import fifth from './images/sixth.jpg';
//deux méthodes : soit <img src='./first.jpg' alt="first" /> qui est directement dans le dossier public
//soit l'import et ce sera dans le composant (book > image exemple) 


//De la sorte on peut mettre le modèle de base qu'il est sensé affiché dans la div. Cette méthode es tle destructuring
const BookPresentation = (props) => {
    const { name, author, image } = props;
    const desk = `Name of the book : ${name}`
    return (
        <div>
            <img src={image} alt={desk}/>
            {/* alt desk pour faire que le alt soit ajouté en fonction du  */}
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
    );
};

const BooksPresentation = (props) => {
    return (
        //ici pour pouvoir y insererer les elements de sort que le grid puisse fonctionner.
        <div className={style.allBooks}>
            <BookPresentation image={first} name="나의 눈부신 친구" author="한길사" />
            <BookPresentation image={third} name="우리가 서로에개 산물이 된다면" author="유미 호건지음" />
            <BookPresentation image={fourth}name="연애의기억" author="/" />
            <BookPresentation image={second} name="언젠가 사랑이 말을 걸면" author="/" />
            <BookPresentation image={fifth} name="말그릇" author="김윤나" />
        </div>
    );
};

export default BooksPresentation;
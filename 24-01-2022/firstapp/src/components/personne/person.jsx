import style from './person.module.css'

const Person = ({firstname, lastname, gender}) =>{
    //ça fait comprendre à vscode qu'il a besoin de firstname, lastname, gender ! et les met dans l'autocompletion! 
    const title = (gender === 'F') ? 'Madame':(gender === 'M') ? 'Monsieur' : '';

    const color = (gender === 'F') ? style.colorWoman:(gender === 'M') ? style.colorMan : style.colorOther;

    /* une autre manière :
    let title = '';
    let color = style.colorOther; 
    if(gender === F) {
        title = 'Madame';
        color = style.colorWoman;
    }
    else if( gender === 'M'){
        title = 'Monsieur';
        color = style.colorMan;
    } */

    return(
        <div>
            <p><span className={color}>{title}</span> {firstname} <span className={style.lastname}>{lastname}</span></p>
            {/* pour concaténé plusieurs nom de class CSS dans class name il faut : {title} {firstname} <span className={`${style.lastname} ${color}`}>{lastname}</span> */}
        </div>
    );
};

export default Person;
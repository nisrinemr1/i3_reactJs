import React from 'react';
import style from './welcome.module.css';

const Welcome = (props) => {
    
    const {welcome, library} = props;
    
    return(
        <div>
            <h1 className={style.welcome}>{welcome}</h1>
            <h2 className={style.library}>{library}</h2>
        </div>
    );
}

export default Welcome;
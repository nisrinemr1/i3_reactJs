import { useEffect, useState } from "react";
import moment from 'moment';
import style from './timeDate.module.css'


const Horloge = () => {
    //variable d'état
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setTimeout(() => {
            //console.log('Click');

            //mise à jour du state donc mise à jour du state à chaque fois 
            setTime(new Date());
        }, 200);

        return() => {
            clearTimeout(timerID);
            //et le timer s'arr
        }
    })

    //.map: 
    //↑ Uniquement pour les collections!

    const heure = moment(time).format('HH');
    const minute = moment(time).format('mm');
    const seconde = moment(time).format('ss');
    //NOTE: Il est possible de formater en une seule fois :
    // const seconde = moment(time).format('HH : mm : ss');


    return (
        <div>
            <h1 className={style.rainbowtext}>Heure actuelle</h1>
            <p>{heure}: {minute} : {seconde}</p>
        </div>
    )
}

export default Horloge;
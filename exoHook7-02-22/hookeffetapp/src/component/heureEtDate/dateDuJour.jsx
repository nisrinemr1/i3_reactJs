import { useEffect, useState } from "react";
import moment from 'moment';
import style from './timeDate.module.css'

const DateDuJour = () => {
    //const d'état
    const [today, setToday] = useState(new Date());

    useEffect(() => { //cas ou si l'utilisateur laisse le site ouvert
        const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        // console.log('today', today.getTime());
        // console.log('tomorrow', tomorrow.getTime());

        const waitTime = tomorrow.getTime() - today.getTime();
        //console.log('Wait', waitTime);

        const todayID = setTimeout(() => {
            setToday(new Date());
        }, waitTime);

        return () => {
            clearTimeout(todayID)
        }
    })



    //afficher tout en une fois
    const displayToday = moment(today).format('dddd D MMMM YYYY')



    return (
        <div>
            <h1 className={style.rainbowtext}> Date du jour</h1>
            <p>{displayToday}</p>
        </div>
    )
};

export default DateDuJour;
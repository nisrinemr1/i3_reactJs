/* Prenom (Input:text)
Nom (Input:text)
Email (Input:email)
Type de besoin (Select)
Message (Textarea)
Cacahuètes (Radio)
Sucrée/Salée ? ✅ */

//!this est un ancien code!
import style from './contact-form.module.css'
import { useState } from 'react';

const ContactForm = (props) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [need, setNeed] = useState('choose');
    const [message, setMessage] = useState('');
    const [cacahuete, setCacahuete] = useState('yes');
    const [cacahueteSweet, setCacahueteSweet] = useState(false);
    const [cacahueteSalty, setCacahueteSalty] = useState(false);
   
    const handleDoubleChoice = () => {
        setCacahueteSalty(true);
        setCacahueteSweet(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /* traitement ajax! ou quelque chose qui soit stocker dans l'application (comme une liste ou todo!) */
        const data = {
            firstname,
            lastname: lastname.toLocaleUpperCase(),
            email,
            need,
            message,
            cacahuete,
            cacahueteSweet,
            cacahueteSalty
        }

        console.log(data);
        // Cas réel : traitement des données, envoies d'une requete AJAX


        /* reset du state une manière */
        /* e.target.reset(); */
        handleResetForm();
    }
    /* Manière la plus efficace meme si elle est longue */
    const handleResetForm = (e) => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setNeed('');
        setMessage('');
        setCacahuete('yes');
        setCacahueteSweet(false);
        setCacahueteSalty(false);
    }

    return (<>
        <h3>Formulaire de contact 🥜</h3>

        <form className={style.myForm} onSubmit={handleSubmit}>
            <div>
                <label htmlFor='firstname'>Prenom</label>
                <input type="text" id="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} />{/* une fonction qui va recup l'input et recuperer la valeur de l'input. Le but de cela est de lier avec l'input et le state. En ajoutant la value={firstname}, dans la console on pourra modifier le states de la console et modifiera le visuel du site. i*/}
            </div>


            <div>
                <label htmlFor='lastname'>Nom</label>
                <input type="text" id="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div>
                <label htmlFor='need'>Type de besoin</label>
                <select id="need" onChange={(e) => setNeed(e.target.value)} value={need}>{/* choix final de l'utilisateur et la veleurs sont les possibilité! Y aura que un de tout cela */}
                    <option value="choose">--Choissisez une option--</option>
                    <optgroup label='Backend'>
                        <option value='php'>PHP</option>
                        <option value='nodejs'>NodeJs</option>
                    </optgroup>
                    <optgroup label='Frontend'>
                        <option value='html'>HTML / CSS / JS</option>
                        <option value='react'>React</option>
                        <option value='design'>Design</option>
                    </optgroup>
                </select>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" onChange={(e) => setMessage(e.target.value)} value={message} />
            </div>

            <div>
                <label htmlFor="cacahuetes">Aimez-vous les cacahuètes</label>
                <label htmlFor="cacahuetes_value1" value="cacahuetes_value1">OUI</label>
                <input type="radio" name="cacahuetes" onChange={() => setCacahuete('yes')} checked={cacahuete === 'yes'} value='yes' />
                <label htmlFor="cacahuetes_value2" value="cacahuetes_value2">Non</label>
                <input type="radio" name="cacahuetes" onChange={() => setCacahuete('no')} checked={cacahuete === 'no'} value='no' />
                <label htmlFor="cacahuetes_value4" value="cacahuetes_value3">N/A</label>
                <input type="radio" name="cacahuetes" onChange={() => setCacahuete('n/a')} checked={cacahuete === 'n/a'} value='n/a' />
            </div>

            {cacahuete === 'yes' && (
                <div>
                    <label htmlFor='cacahuetes_choice'>Quel type de cacahuetes ?</label>
                    {/* ce qui nous interesse est de savoir si il a cocher sucré ou salé */}
                    <input type='checkbox' id='cacahuetes_choice1' onChange={(e) => setCacahueteSweet(e.target.checked)} checked={cacahueteSweet} />
                    <label htmlFor='cacahuetes_choice1'>Sucré</label>
                    <input type='checkbox' id='cacahuetes_choice2' onChange={(e) => setCacahueteSalty(e.target.checked)} checked={cacahueteSalty} />
                    <label htmlFor='cacahuetes_choice2'>Salé</label>

                    {(!cacahueteSweet || !cacahueteSalty) && (
                        <label htmlFor='cacahuetes_choiceBoth' className={style.myChoiceBoth} onClick={handleDoubleChoice}>Les deux</label>
                    )}
                </div>
            )}

            {/* toujours mettre le type autrement il agira comme un type submit! */}
            <div>
                <input class="btn" type="submit" value="Envoyez" onClick />
            </div>
            {/* pour le coup ce ne sera pas pratique pour faire un display flex */}
            {/* <div>
                <label> Prenom
                    <input type="text" />
                </label>
            </div> */}
        </form>
    </>);
};
//mettre les emojis dans l'hmtl afin d'empecher l'utilisateur de copier coller! bon après ceux qui s'y connaissent le code pourront juste aller le recuperer dans le css! 

export default ContactForm;
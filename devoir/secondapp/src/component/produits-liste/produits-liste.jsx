import PropTypes from 'prop-types';
import DisplayPrice from '../display-price/display-price';
import style from './produit.module.css'

const ListeCosmetique = (props) => { /* pas meilleure nom :D */
    const { nom, price, promo } = props;

    return (
        <tr>
            <td>{nom}</td>
            {!promo ? (
                <td colSpan={2}><DisplayPrice value={price} /></td>
            ) : (<>
                <td><DisplayPrice value={price} /></td>
                <td className={style.promo}>{(promo === true) ? 'promo' : ' '}</td>
            </>)}
        </tr>
    );
};
/* if (promo === true) {
    'promotion'
}
else{
    'Pas en promotion'
}
en ternaire
promo === true ? 'promotion': 'pas en promo' */


const ProduitsListe = (props) => {
    console.log("Coucou 2")

    /* stocks.forEach(stock =>{
        Pour chacun  des éléments stock Je veux qu'un objet produit, il se passe quelque chose pour produit
    }) */
    const stocksJSX = props.stock.map(/* destructuration d'un tableau!  */
        produit => <ListeCosmetique key={produit.id}{...produit} />
    );/* pour chacun des elements */

    console.log("reeee");

    return (
        <>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Promo!</th>
                    </tr>
                </thead>
                <tbody>
                    {stocksJSX}
                </tbody>
            </table>
        </>
    );
};

ProduitsListe.defaultProps = { /* Le tableau qu'on récupere depuis l'App.js. */
    stock: []
};
export default ProduitsListe;

ProduitsListe.propTypes = { /* .propTypes est une fonction */
    nom: PropTypes.string,
    prix: PropTypes.number,
    promo: PropTypes.bool /* pour boolean! */
};
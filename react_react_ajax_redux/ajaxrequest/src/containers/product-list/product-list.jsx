import { useSelector } from 'react-redux';
import PriceDisplay from '../../components/price-display.jsx/price-display';
import style from'./product-list.module.css';
import { useDispatch } from "react-redux";
import { selectProduct } from '../../store/actions/product-action';

// Donnée hardcodé - Modkup (Temporaire!!!) Plus besoin vu qu'on l'a dans le store!
// const products = [
//     { id:1, name: 'Product1', price: 32},
//     { id:2, name: 'Product2', price: 3.14},
//     { id:3, name: 'Product3', price: 1}
// ];

const ProductListeItem = (props) =>(//fonction lambad qui fait un return tout de suite! On va chercher les depuis 
                                    //les props de productliste!

        /* conversion des products en products liste item! */
        <li className={style.product} onClick={() => props.onSelected(props.id)}>
            <p>{props.name}</p>
            <p><PriceDisplay value={props.price}/></p>
        </li>
    );


const ProductListe = () => {
    //recupération des produits depuis le store! 

    const products = useSelector(state=> state.productCategory.products);
    const dispatch = useDispatch();
    
    const productsJSX = products.map(
        item => <ProductListeItem 
                                {...item} 
                                key={item.id}
                                onSelected={(id) => dispatch(selectProduct(id))}/>
    );

    return( 
        <div className={style.containerList}>
            <h2>Liste de Produit</h2>
            <ul className={style.productList}>
                {productsJSX}
            </ul>
        </div>
    );
};

export default ProductListe;
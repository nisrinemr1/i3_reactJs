import { useSelector } from "react-redux";
import PriceDisplay from "../../components/price-display.jsx/price-display";
import { selectProduct } from "../../store/actions/product-action";
import style from './product-detail.module.css';

// //Fausse données (Mokup)
// const selectedProduct = {
//     name: 'Je sais pas, product name par exemple',
//     price: 42.1,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu convallis odio, ut varius turpis. Phasellus at mi lorem.',
//     image: 'images/totoro3.jpg'
// }

const ProductDetail = () =>{

    const selectedProduct = useSelector(s => s.productCategory.selectedProduct);

    if(selectedProduct === null){
        return(
            <div><h2>Pas de produit selectionné</h2></div>
        )
    }
    
    return(
        <div>
            <h2>Detail du produit</h2>
            <div>
                <p>{selectedProduct.name}</p>
                <p><PriceDisplay value={selectedProduct.price}/></p>
                <img className={style.img} src={selectedProduct.image} alt={selectedProduct.name}/>
                <h4>Description du produit: </h4>
                <p>{selectedProduct.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail
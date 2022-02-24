import { PRODUCT_SELECTION } from "../actions/product-action";

//on ne l'export pas l'initialProductState
const initialProductState = {
    products: [
        {
            id: 1,
            name: 'Pitit gabojingeo ❤️',
            price: 15_000_000_000,//lisibilité du dev pour voir si on a pas loupé un 0
            description: 'Bébééééééé IL VAUT UNE VIE',
            image: 'images/phoque.png'
        },
        {
            id: 2,
            name: 'totoroo',
            price: 42.1,
            description: 'Coucouuu un petit totoro archi cute des famille',
            image: 'images/totoro3.jpg'
        },
        {
            id:3,
            name: 'totoro :3',
            price: 5,
            description: 'et une autre image de totorooooo',
            image: 'images/totoro2.jpg'
        }
    ],
    selectedProduct: null 
    // par défaut, rien n'est select, mais quand l'utilisateur cliquera sur un id
    // selectedProduct prendra l'id que l'utilisateur à choisis dans la liste
    // de produit.
};

//on export le reducer
export const productReducer = (state = initialProductState, action) =>{

    switch(action.type){

        case PRODUCT_SELECTION: 
            return{
                ...state,
                selectedProduct: state.products.find(p => p.id === action.payload)
            };
        default: 
            return state;
    };
};
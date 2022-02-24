//Création des constantes pour les actions possibles.

export const PRODUCT_SELECTION = 'product/selection'; //création d'une const qui contient l'action. 
// product : catégorie de l'action 
// selection: type d'action. 
// comme si c'était product_add

//Création de méthode pour générer les objets "Action"
export const selectProduct = (id) =>({
    type: PRODUCT_SELECTION,
    payload: id
});

// si il y avait un panier, il faudra ajouter le fait de cliquer sur 
// le btn pour ajouter le produit, puis afficher le panier avec 
// le contenu du panier. 
const FruitList = () => {

    //donnée (format objet JS)
    // EXEMPLE : resultat api, formulaire, donnée Json, ...
    const fruits = [
        "Pomme",
        "Poire",
        "Cerise",
        "Tomate",
        "Lychee",
        "Framboise",
        "Banane"
    ];
    console.log(fruits);

    //Conversion des données vers des composant React.
    //Donc utilisation de la fonction map. 
    const fruitsJSX = fruits.map(fruit => <li key={fruit}>{fruit}</li>);
    console.log(fruitsJSX);
     // ↓ Equivalement à la fonction "map", avec la boucle "forEarch"
    /*
    const fruitsJSX2 = [];
    fruits.forEach(fruit => {
        const elementJSX = <li>{fruit}</li>;
        fruitsJSX2.push(elementJSX);
    })
    */

    return (
        <>
            <h3>Liste de fruits</h3>

            <ul>
                {fruitsJSX}
            </ul> {/* permet de mettre une ligne */}
        </>
    );
}

export default FruitList;

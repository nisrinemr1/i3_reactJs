import ProduitsListe from './component/produits-liste/produits-liste'
import {nanoid} from 'nanoid'
import './App.css';

function App() {
  const produits =[
    {id : nanoid(), nom : "Shampoing solide neutre", prix: 5, promo: true },
    {id : nanoid(), nom : "Shampoing solide monoï", prix: 7, promo: false },
    {id : nanoid(), nom : "Shampoing solide fleurs", prix: 10, promo: false },
    {id : nanoid(), nom : "Baume à lèvres framboise", prix: 4, promo: true },
    {id : nanoid(), nom : "Mascara", prix: 4, promo: true},
    {id : nanoid(), nom : "Blush", prix: 12, promo: false },
    {id : nanoid(), nom : "Khol", prix: 7, promo: false }
  ];

  console.log(produits);
  
  return (
    <div className="App">
      <ProduitsListe stock = {produits} /> 
    </div>
  );
}

export default App;

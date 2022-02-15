import ProduitsListe from './component/produits-liste/produits-liste'
import {nanoid} from 'nanoid'
import './App.css';

function App() {
  const produits =[
    {id : nanoid(), nom : "Shampoing solide neutre", price: 5, promo: true },
    {id : nanoid(), nom : "Shampoing solide monoï", price: 7, promo: false },
    {id : nanoid(), nom : "Shampoing solide fleurs", price: 10, promo: false },
    {id : nanoid(), nom : "Baume à lèvres framboise", price: 4, promo: true },
    {id : nanoid(), nom : "Mascara", price: 4, promo: true},
    {id : nanoid(), nom : "Blush", price: 12, promo: false },
    {id : nanoid(), nom : "Khol", price: 7, promo: false }
  ];

  console.log(produits);
  
  return (
    <div className="App">
      <ProduitsListe stock = {produits} /> 
    </div>
  );
}

export default App;

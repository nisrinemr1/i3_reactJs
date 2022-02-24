import logo from './logo.svg';
import './App.css';
import ProductListe from './containers/product-list/product-list';
import ProductDetail from './containers/product-detail/product-detail';
import SearchBar from './components/searchbar/searchbar';

function App() {
  return (
    <div className="App">
      <h1>Demo Redux + Ajax</h1>
      <SearchBar/>
      <ProductListe/>
      <ProductDetail/>
    </div>
  );
}

export default App;

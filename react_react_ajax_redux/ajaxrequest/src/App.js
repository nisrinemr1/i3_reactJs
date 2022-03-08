import logo from './logo.svg';
import './App.css';
import ProductListe from './containers/product-list/product-list';
import ProductDetail from './containers/product-detail/product-detail';
import SearchBar from './components/searchbar/searchbar';
import WeatherContainer from './containers/weather-container/weather-container';

function App() {
  return (
    <div className="App">
      <h1>Demo Redux + Ajax</h1>
      {/*<SearchBar/> on va l'utiliser dans la weather container! */}
      <WeatherContainer/>
      <ProductListe/>
      <ProductDetail/>
    </div>
  );
}

export default App;

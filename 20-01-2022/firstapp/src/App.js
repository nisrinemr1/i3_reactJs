import './App.css';
import Welcome from './components/welcome/welcome';
import Message from './components/message/message';

function App() {
  return (
    <div className="App">
      <Welcome name="Shamallow"/>


      {/* On ajoute du typage pour qu'il ne mette pas un chifre 42 pour le nom d'autheur */}
      <Message author="DdangKong" content="Hello"/>
      <Message author="Bulgogi" content="Darkness"/>
      <Message author="Niah" content="My old friend"/>
    </div>
  );
}

export default App;

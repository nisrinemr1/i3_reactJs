import logo from './logo.svg';
import './App.css';
import CounterDisplay from './containers/counter-display/counter-display';
import CounterAction from './containers/counter-action/counter-action';
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import CounterReset from './containers/counter-reset/counter-reset';

function App() {
  return (
    <div className="App">
      <div data-scroll-section>
      <h1>Demo Redux ☄️</h1>
      <CounterDisplay/>
      <CounterAction/>
      <CounterAction step={5}/>
      <CounterReset/>
      </div>
    </div>
  );
}

export default App;

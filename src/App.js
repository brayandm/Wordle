import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Game numberOfRows={6} numberOfCells={5} />
    </div>
  );
}

export default App;

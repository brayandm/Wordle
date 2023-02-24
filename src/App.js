import './App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Game numberOfRows={6} numberOfCells={5} />
    </div>
  );
}

export default App;

import './App.css';
import Grid from './components/Grid';
import Keyword from './components/Keyword';

function App() {
  return (
    <div className="App">
      <Grid numberOfRows={6} numberOfCells={5} />
      <br />
      <Keyword />
    </div>
  );
}

export default App;

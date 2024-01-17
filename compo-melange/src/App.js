// import logo from './logo.svg';
import './App.css';
import Route from './components/Route';
import Practer from './components/Practer';
import ButtonGroup from './components/Button/ButtonGroup';

function App() {
  return (
    <div className="App">

      <h1>{window.location.pathname}</h1>


      <Route path="practer">
        <Practer />
      </Route>

      <Route path="button-group">
        <ButtonGroup />
      </Route>

      
    </div>
  );
}

export default App;

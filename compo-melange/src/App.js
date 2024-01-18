// import logo from './logo.svg';
import './App.css';
import Route from './components/Route';
import Practer from './components/Practer';
import ButtonGroup from './components/Button/ButtonGroup';
import Accordion1 from './components/Accordion/Accordion1';
import Accordion2 from './components/Accordion/Accordion2';

function App() {
  return (
    <div className="App">
      <h1>{window.location.pathname}</h1>
      <Route path="practer">
        <Practer />
      </Route>
      <Route path="accordion1">
        <Accordion1 />
      </Route>
      {/* <Route path="accordion2">
        <Accordion2 />
      </Route> */}
      <Route path="button-group">
        <ButtonGroup />
      </Route>

      
    </div>
  );
}

export default App;

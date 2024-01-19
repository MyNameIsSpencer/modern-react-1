// import logo from './logo.svg';
import './App.css';
import Route from './components/Route';
import Practer from './components/Practer';
import ButtonGroup from './components/Button/ButtonGroup';
import CounterPrac from './components/CounterPrac/CounterPrac';
import Accordion1 from './components/Accordion/Accordion1';
import Accordion2 from './components/Accordion/Accordion2';
import DataTable1 from './components/DataTable/DataTable1';

function App() {
  return (
    <div className="App">
      <h1>{window.location.pathname}</h1>
      {/* <Route path="practer">
        <Practer />
      </Route> */}
      <Route path="counter-prac">
        <CounterPrac initialCount={89} />
      </Route>
      <div style={{height: '50px'}}></div>

      <Route path="table1">
        <DataTable1 />
      </Route>
      <div style={{height: '50px'}}></div>
      <Route path="accordion1">
        <Accordion1 />
      </Route>
      <div style={{height: '50px'}}></div>

      <Route path="/modal1">
        {/* <ModalPage /> */}
      </Route>
      {/* <Route path="accordion2">
        <Accordion2 />
      </Route> */}
      <div style={{height: '50px'}}></div>
      <Route path="button-group">
        <ButtonGroup />
      </Route>

      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Route from './components/Route';
import Practer from './components/Practer';

function App() {
  return (
    <div className="App">

      <h1>{window.location.pathname}</h1>


      <Route path="practer">
        <Practer />
      </Route>




    </div>
  );
}

export default App;

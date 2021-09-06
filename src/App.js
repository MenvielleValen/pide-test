
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import Nav from './Components/Nav/Nav';
import Commerces from './Components/Commerces/Commerces';
import Products from './Components/Products/Products';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Commerces} />
        <Route exact path="/comercios/:id/:comerid" component={Products} />
      </Router>
    </div>
    
  );
}

export default App;

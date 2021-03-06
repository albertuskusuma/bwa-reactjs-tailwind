import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Congratulation from './pages/Congratulation';
import Details from './pages/Details';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/categories/:idc" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/congratulation" component={Congratulation}/>
        <Route exact path="*" component={NotFound}/>
      </Router> 
    </div>
  );
}

export default App;
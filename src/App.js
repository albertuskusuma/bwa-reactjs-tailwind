import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Details from './pages/Details';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/categories/:idc" component={Details}/>
      </Router> 
    </div>
  );
}

export default App;

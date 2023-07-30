import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

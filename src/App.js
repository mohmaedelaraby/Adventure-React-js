import {BrowserRouter as  Router , Route ,Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './media/pages/Home';
import Services from './media/pages/Services'
import SignUp from './media/pages/SignUp';
import Products from './media/pages/Products';
import Card from './components/Card';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home} ></Route>
        <Route path="/services" exact component={Card} ></Route>
        <Route path="/signup" exact component={SignUp} ></Route>
        <Route path="/products" exact component={Products} ></Route>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;

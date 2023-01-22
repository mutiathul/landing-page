import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
// import Home from './component/home';
import Home from './component/home/index'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './component/about';

function App() {
  return (
    <div className="App">
     <Router>
      <div>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

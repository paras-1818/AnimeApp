import logo from './logo.svg';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from './component/Pages/HomePage';
import AnimePage from './component/Pages/AnimePage';
import About from './component/About'
 
function App() {
  return (<>
    <Router>
      <Switch>
        <Route exact path="/" > <HomePage /></Route>
        <Route exact path="/animePage"> <AnimePage /> </Route>
        <Route exact path="/ContactMe"> <About/> </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

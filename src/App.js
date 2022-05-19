import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Validation from './Components/Validation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <div style={{backgroundColor:'#f5ccff',height:'50rem'}}>
    <Navbar/>
    <Switch>
      {/* <Route path="/">
        <Home/>
      </Route> */}
      {/* <Route path="/login">
        <Login/>
      </Route> */}
      <Route path="/">
        <Validation/>
      </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

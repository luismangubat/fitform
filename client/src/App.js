import logo from './logo.svg';
import './App.css';
import Landing from './pages/landing';
<<<<<<< Updated upstream
import { BroweserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BroweserRouter></BroweserRouter>

      <Landing/>
       Hi there
       
=======
import {  Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Landing/>
          </Route>
          
        </Switch>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

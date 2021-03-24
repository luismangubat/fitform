import logo from './logo.svg';
import './App.css';
import Landing from './pages/landing';
import { BroweserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BroweserRouter></BroweserRouter>

      <Landing/>
       Hi there
       
    </div>
  );
}

export default App;

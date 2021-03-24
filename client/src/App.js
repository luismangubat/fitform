
import './App.css';
import Landing from './pages/landing';
import Stats from './pages/stats';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Landing/>
          </Route>
          <Route exact path='/stats'>
            <Stats/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

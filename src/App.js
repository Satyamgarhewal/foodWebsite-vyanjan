import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

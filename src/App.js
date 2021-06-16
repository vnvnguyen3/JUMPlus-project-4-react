import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import NewAccount from './components/NewAccount';
import Options from './components/Options';
import Info from './components/Info';
import Update from './components/Update';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import ViewTransactions from './components/ViewTransactions';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>DollarsBank</h1>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" component={NewAccount} />
            <Route path="/login" component={Login} />
            <Route path="/options" component={Options} />
            <Route path="/info" component={Info} />
            <Route path="/update" component={Update} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/viewTransactions" component={ViewTransactions} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

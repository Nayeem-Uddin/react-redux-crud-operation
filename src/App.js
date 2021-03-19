import Contacts from './components/Contacts/Contacts';
import Navbar from './components/elements/Navbar';
import AddContact from './components/Contacts/AddContact';
import './styles/App.scss';
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditContact from './components/Contacts/EditContact';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/">
                  <Contacts></Contacts>
              </Route>
              <Route exact path="/contacts/add">
                <AddContact></AddContact>
              </Route>
              <Route exact path="/contacts/edit/:id">
                <EditContact></EditContact>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Profile from './components/profile';
import './css/config.css';
import store from './redux/stores/askStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact={true} path='/account/wall' />
              <Route exact={true} path='/profile' component={Profile} />
              <Route path='/account/notfication' />
            </Switch>
          </div>
      </Router>
    </Provider>
    
  );
}

export default App;

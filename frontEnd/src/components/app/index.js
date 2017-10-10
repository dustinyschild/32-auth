import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';

import createAppStore from '../../lib/store';
import { Provider } from 'react-redux';

const store = createAppStore();

import SignUpForm from '../signup-form';
import Dashboard from '../dashboard-container';

export default class App extends React.Component {
  render(){
    return (
      <section>
        <Provider store={store}>
          <Router>
            <section>
              <nav>
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/home/signup'}>Sign In</Link></li>
                </ul>
              </nav>
              <Switch>
                <Route exact path='/home/signup' component={SignUpForm}/>
                <Route exact path='/' component={() => <div>Welcome to my app!</div>} /> //Landing Page
                <Route component={() => (<h1>Not Found</h1>)}/>
              </Switch>
            </section>
          </Router>
        </Provider>
      </section>
    );
  }
}

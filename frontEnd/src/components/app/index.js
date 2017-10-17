import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../action/auth-actions';

import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';

import SignUpForm from '../signup-form';
import SignInForm from '../signin-form';
import Dashboard from '../dashboard-container';

class App extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.signOut();
  }

  render(){
    return (
      <div>

        <Router>
          <section>
            <header>
              {this.props.auth ?
                (<aside>
                  <li><Link to={'/home/dashboard'}>Dashboard</Link></li>
                  <button onClick={this.handleClick}>Sign Out</button>
                </aside>) :
                (<span><Link to={'/home/signin'}>Sign In Here!</Link></span>)
              }
            </header>
            <nav>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/home/signup'}>Sign Up</Link></li>
                <li><Link to={'/home/signin'}>Sign In</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/home/signup' component={SignUpForm}/>
              <Route exact path='/home/signin' component={SignInForm}/>
              <Route exact path='/home/dashboard' component={Dashboard}/>
              <Route exact path='/' component={() => <div>Welcome to my app!</div>} /> //Landing Page
              <Route component={() => (<h1>Not Found</h1>)}/>
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth});
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(authActions.signOut()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

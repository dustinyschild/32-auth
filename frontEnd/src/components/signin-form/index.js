import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../action/auth-actions';

class SignInForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.signIn(this.state);
  }

  render(){
    return (
      <div className="signin-form">
        <h1>Sign In:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(authActions.signinRequest(user)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SignInForm);

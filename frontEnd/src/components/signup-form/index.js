import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../action/auth-actions';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.signUp(this.state);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(authActions.signupRequest(user)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);

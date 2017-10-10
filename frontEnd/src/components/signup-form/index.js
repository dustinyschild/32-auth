import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return(
      <form >
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
      </form>
    );
  }
}

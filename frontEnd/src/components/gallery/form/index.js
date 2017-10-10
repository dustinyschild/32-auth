import React from 'react';

export default class galleryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createGallery(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="gallery-form">
        <input
          name="name"
          type="text"
          placeholder="gallery Title"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

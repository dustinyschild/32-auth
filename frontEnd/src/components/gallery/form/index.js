import React from 'react';

export default class GalleryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      desc: ''
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
          placeholder="Gallery Title"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="desc"
          type="text"
          placeholder="Description"
          value={this.state.desc}
          onChange={this.handleChange}
        />
        <button type="submit">Create Gallery</button>
      </form>
    );
  }
}

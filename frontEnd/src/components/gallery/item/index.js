import React from 'react';

export default class GalleryItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <h2>{this.props.gallery.name}</h2>
        <p>{this.props.gallery.desc}</p>
        <button onClick={() => this.props.remove()}>X</button>
      </div>
    );
  }
}

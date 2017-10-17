import React from 'react';

import PicForm from '../../pic-form';
import PicItem from '../../pic-item';

export default class GalleryItem extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.remove(this.props.gallery);
  }

  render(){
    return (
      <div>
        <h2>{this.props.gallery.name}</h2>
        <p>{this.props.gallery.desc}</p>
        <button onClick={this.handleClick}>X</button>
        <PicForm gallery={this.props.gallery}/>
      </div>
    );
  }
}

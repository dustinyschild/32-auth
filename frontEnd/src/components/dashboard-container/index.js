import React from 'react';
import { connect } from 'react-redux';
import * as galleryActions from '../../action/gallery-actions';
import GalleryForm from '../gallery/form';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <GalleryForm createGallery={this.props.createGallery}/>
        <div>
          <h2>Galleries</h2>
          {this.props.galleries.map(gallery => {
            return(<p key={gallery._id}>{gallery.name}</p>);
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ galleries: state.galleries });

const mapDispatchToProps = dispatch => ({
  createGallery: gallery => dispatch(galleryActions.galleryCreateRequest(gallery)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

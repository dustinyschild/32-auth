import React from 'react';
import { connect } from 'react-redux';
import * as galleryActions from '../../action/gallery-actions';
import GalleryForm from '../gallery/form';
import GalleryItem from '../gallery/item';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchGalleries();
  }

  render(){
    return(
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <GalleryForm createGallery={this.props.createGallery}/>
        <div>
          <h2>Galleries</h2>
          {this.props.galleries.map(gallery => {
            return(<GalleryItem key={gallery._id} gallery={gallery}>{gallery.name}</GalleryItem>);
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ galleries: state.galleries });

const mapDispatchToProps = dispatch => ({
  fetchGalleries: () => dispatch(galleryActions.fetchGalleriesRequest()),
  createGallery: gallery => dispatch(galleryActions.galleryCreateRequest(gallery)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

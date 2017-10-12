const request = require('superagent');
const API_URL = 'http://localhost:5000';

export const galleryCreate = gallery => {
  return {
    type: 'GALLERY_CREATE',
    payload: {
      ...gallery,
    }
  };
};

export const galleryUpdate = gallery => {
  return {
    type: 'GALLERY_UPDATE',
    payload: gallery
  };
};

export const galleryRemove = gallery => {
  console.log('__PAYLOAD__',gallery);
  return {
    type: 'GALLERY_REMOVE',
    payload: gallery
  };
};

export const setGalleries = galleries => {
  return {
    type: 'GALLERY_SET',
    payload: galleries
  };
};

export const galleryCreateRequest = gallery =>
  dispatch => {
    return request.post(`${API_URL}/api/gallery`)
      .set({Authorization: `Bearer ${localStorage.token}`})
      .send(gallery)
      .then(res => {
        dispatch(galleryCreate(res.body));
        return res;
      });
  };

export const fetchGalleriesRequest = () => dispatch => {
  return request.get(`${API_URL}/api/galleries`)
    .set({Authorization: `Bearer ${localStorage.token}`})
    .then(res => dispatch(setGalleries(res.body)));
};

export const galleryRemoveRequest = gallery => dispatch => {
  return request.delete(`${API_URL}/api/gallery/${gallery._id}`)
    .set({Authorization: `Bearer ${localStorage.token}`})
    .then(() => dispatch(galleryRemove(gallery)));
};

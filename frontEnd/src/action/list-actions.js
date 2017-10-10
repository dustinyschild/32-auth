const request = require('superagent');
const API_URL = 'http://localhost:3000';

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
  return {
    type: 'GALLERY_REMOVE',
    payload: gallery
  };
};

export const galleryCreateRequest = gallery =>
  dispatch => {
    return request.post(`${API_URL}/api/gallery`)
      .send(gallery)
      .then(res => {
        dispatch(galleryCreate(res.body));
        return res;
      });
  };

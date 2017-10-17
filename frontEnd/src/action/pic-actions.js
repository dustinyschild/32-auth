const request = require('superagent');
const API_URL = 'http://localhost:5000';

export const createPic = (body,gallery) => {
  return {
    type: 'PIC_CREATE',
    payload: {...body, gallery}
  };
};

export const createPicRequest = (pic,gallery) => dispatch => {
  console.log(pic.file);
  return request.post(`${API_URL}/api/gallery/${gallery}/pic`)
    .set({ Authorization: `$Bearer ${localStorage.token}`})
    .field('name',pic.name)
    .field('desc',pic.desc)
    .attach('image',pic.file)
    .then(res => {
      console.log(res.body);
      dispatch(createPic(res.body,gallery));
    });
};

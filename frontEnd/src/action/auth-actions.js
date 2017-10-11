const request = require('superagent');

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token
});

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE'
});

export const signupRequest = user => dispatch => {
  return request.post(`http://localhost:5000/api/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.text));

      localStorage.token = res.text;
      return res;
    })
    .catch(err => console.log(err));
};

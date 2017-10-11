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

export const signinRequest = user => dispatch => {
  return request.get(`http://localhost:5000/api/signin`)
    .auth(user.username,user.password)
    .then(res => {
      dispatch(tokenSet(res.text));

      localStorage.token = res.text;
      return res;
    })
    .catch(err => console.log(err));
};

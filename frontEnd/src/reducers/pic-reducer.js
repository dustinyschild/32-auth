
const validatePic = payload => {
  const { name,desc,file,gallery } = payload;

  if(!name) throw new Error('Validation Error: `name` is required');
  if(!desc) throw new Error('Validation Error: `desc` is required');
  if(!file) throw new Error('Validation Error: `file` is required');
  if(!gallery) throw new Error('Validation Error: `gallery` is required');
};

export default (state = {},action = {}) => {
  const { type,payload } = action;
  switch(type){
    case 'PIC_CREATE': {
      validatePic(payload);
      let { gallery } = payload;
      return {
        ...state,
        [gallery]: [
          ...state[gallery],
          payload
        ]
      };
    }
    default:
      return state;
  }
};

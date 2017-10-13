
const validatePic = payload => {
  const { name, desc, imageURI, galleryID, objectKey } = payload;

  if(!name) throw new Error('Validation Error: `name` is required');
  if(!desc) throw new Error('Validation Error: `desc` is required');
  if(!imageURI) throw new Error('Validation Error: `imageURI` is required');
  if(!galleryID) throw new Error('Validation Error: `galleryID` is required');
};

export default (state = {},action = {}) => {
  const { type,payload } = action;
  const { galleryID } = payload;
  switch(type){
    case 'PIC_CREATE':
      validatePic(payload);
      return {
        ...state,
        [galleryID]: [
          ...state[galleryID],
          payload
        ]
      };
    default:
      return state;
  }
};

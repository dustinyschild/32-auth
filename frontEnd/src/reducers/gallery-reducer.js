const initialState = [];

const validategallery = (payload,options) => {
  console.log('__Options__',options);
  let { validateId,validateTitle } = options;
  if(validateId && !payload._id){
    throw new Error('Validation error: No _id found');
  }
  if(validateTitle && !payload.title){
    throw new Error('Validation error: no title found');
  }
};

export default (state = initialState,action = {}) => {
  const { type, payload } = action;

  switch(type){
    case 'GALLERY_CREATE':
      return [
        ...state,
        payload
      ];
    case 'GALLERY_UPDATE':
      return state.map(gallery => {
        return gallery._id === payload._id ?
          payload : gallery;
      });
    case 'GALLERY_REMOVE':
      validategallery(payload,{validateId: true});
      return state.filter(gallery => {
        return gallery._id !== payload._id;
      });
    default:
      return state;
  }
};

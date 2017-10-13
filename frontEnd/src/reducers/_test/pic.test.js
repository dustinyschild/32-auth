import deepFreeze from 'deep-freeze';
import reducer from '../pic-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('create pic',() => {
  const galleryID = 35;
  const state = {
    [galleryID]: [
      {
        name: 'old pic',
        desc: 'old description',
        imageURI: `${__dirname}/../lib/traveler-test.png`,
        galleryID
      }
    ]
  };
  const action = {
    type: 'PIC_CREATE',
    payload: {
      name: 'new pic',
      desc: 'description',
      imageURI: `${__dirname}/../lib/tester.png`,
      galleryID
    }
  };
  deepFreeze([state,action]);

  const res = reducer(state,action);
  expect(res).toEqual({
    35: [
      {
        name: 'old pic',
        desc: 'old description',
        imageURI: `${__dirname}/../lib/traveler-test.png`,
        galleryID
      },
      {
        name: 'new pic',
        desc: 'description',
        imageURI: `${__dirname}/../lib/tester.png`,
        galleryID
      }
    ]
  });
});

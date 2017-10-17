import deepFreeze from 'deep-freeze';
import reducer from '../pic-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('create pic',() => {
  const gallery = 35;
  const state = {
    [gallery]: [
      {
        name: 'old pic',
        desc: 'old description',
        file: `${__dirname}/../lib/traveler-test.png`,
        gallery
      }
    ]
  };
  const action = {
    type: 'PIC_CREATE',
    payload: {
      name: 'new pic',
      desc: 'description',
      file: `${__dirname}/../lib/tester.png`,
      gallery: gallery
    }
  };
  deepFreeze([state,action]);

  const res = reducer(state,action);
  expect(res).toEqual({
    35: [
      {
        name: 'old pic',
        desc: 'old description',
        file: `${__dirname}/../lib/traveler-test.png`,
        gallery
      },
      {
        name: 'new pic',
        desc: 'description',
        file: `${__dirname}/../lib/tester.png`,
        gallery
      }
    ]
  });
});

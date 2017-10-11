import deepFreeze from 'deep-freeze';
import reducer from '../gallery-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('Create gallery Item',() => {
  const state = defaultState;
  const action = {
    type: 'GALLERY_CREATE',
    payload: {
      title: 'New gallery',
    }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual([{title: 'New gallery'}]);
});

test('Update gallery Item',() => {
  const state = [
    { _id: 5,title: 'Update Me' }
  ];
  const action = {
    type: 'GALLERY_UPDATE',
    payload: { _id: 5,title: 'Updated' }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual([action.payload]);
});

test('Remove gallery Item',() => {
  const state = [
    { _id: 3,title: 'Remove me'},
    { _id: 4,title: 'Don\'t remove me'}
  ];
  const action = {
    type: 'GALLERY_REMOVE',
    payload: {
      _id: 3
    }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual([
    { _id: 4,title: 'Don\'t remove me'}
  ]);
});

test('Unknown Action',() => {
  const state = defaultState;
  const action = {
    type: 'UNKNOWN'
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual(defaultState);
});

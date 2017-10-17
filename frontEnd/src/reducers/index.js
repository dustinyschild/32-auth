import { combineReducers } from 'redux';
import galleries from './gallery-reducer';
import auth from './auth-reducer';
import pics from './pic-reducer';

export default combineReducers({ galleries,auth,pics });

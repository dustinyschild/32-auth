import { combineReducers } from 'redux';
import galleries from './gallery-reducer';
import auth from './auth-reducer';

export default combineReducers({ galleries,auth });

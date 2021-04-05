import { combineReducers } from 'redux';
import authorization from './authorization';
import card from './card';

export default combineReducers({authorization, card});
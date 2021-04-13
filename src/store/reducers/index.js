import { combineReducers } from 'redux';
import authorization from './authorization';
import card from './card';
import address from './address';
import mapRoute from './mapRoute';

export default combineReducers({authorization, card, address, mapRoute});
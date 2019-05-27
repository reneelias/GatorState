import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listingReducer from './listingReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  listings: listingReducer,
  userReducer,
  messages: messageReducer
});

import {
  UPLOAD_LISTING_SUCCESS,
  DELETE_LISTING_SUCCESS,
  GET_ALL_LISTINGS_SUCCESS
} from '../types';

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LISTINGS_SUCCESS:
      return [...state, ...action.payload];
    case UPLOAD_LISTING_SUCCESS:
      return [action.payload, ...state];
    case DELETE_LISTING_SUCCESS:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

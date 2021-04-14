import { SET_ADDRESS_LIST_SUCCESS, SET_ADDRESS_LIST_FAILURE, GET_ADDRESS_LIST } from '../actions/address';

const initialState = {
  list: [],
  error: '',
  isLoading: false
}

export default function address(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_LIST: {
      return {
        list: [],
        error: '',
        isLoading: true
      };
    }

    case SET_ADDRESS_LIST_SUCCESS: {
      return {
        list: action.payload.list,
        error: '',
        isLoading: false
      };
    }

    case SET_ADDRESS_LIST_FAILURE: {
      return {
        list: [],
        error: action.payload.error,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
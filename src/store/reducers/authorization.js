import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT } from '../actions/authorization';
import { setLoginDataToLocalStorage, getLoginDataFromLocalStorage } from '../../localstorage';

const localStorageData = getLoginDataFromLocalStorage();

const initialState = {
  isLoggedIn: localStorageData.isLoggedIn,
  token: localStorageData.token,
  error: {
    authorization: '',
    registration: ''
  }
}

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS: {
      setLoginDataToLocalStorage(true, action.payload.token);

      return {
        isLoggedIn: true,
        token: action.payload.token,
        error: ''
      };
    }

    case LOG_IN_FAILURE: {
      return {
        isLoggedIn: false,
        token: '',
        error: action.payload.error
      };
    }

    case LOG_OUT: {
      setLoginDataToLocalStorage(false, '');

      return {
        isLoggedIn: false,
        token: '',
        error: ''
      };
    }

    default: {
      return state;
    }
  }
}
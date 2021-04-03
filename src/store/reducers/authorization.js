import { LOG_IN, LOG_OUT } from '../actions/authorization';
import { setLoginDataToLocalStorage, getLoginDataFromLocalStorage } from '../../localstorage';

const localStorageData = getLoginDataFromLocalStorage();

const initialState = {
  isLoggedIn: localStorageData.isLoggedIn,
  token: localStorageData.token
}

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      setLoginDataToLocalStorage(true, action.payload.token);

      return {
        isLoggedIn: true,
        token: action.payload.token
      };
    }

    case LOG_OUT: {
      setLoginDataToLocalStorage(false, '');

      return {
        isLoggedIn: false,
        token: ''
      };
    }

    default: {
      return state;
    }
  }
}
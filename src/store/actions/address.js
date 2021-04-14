export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const SET_ADDRESS_LIST_SUCCESS = 'SET_ADDRESS_LIST_SUCCESS';
export const SET_ADDRESS_LIST_FAILURE = 'SET_ADDRESS_LIST_FAILURE';

export const getAddressList = () => ({
  type: GET_ADDRESS_LIST,
});

export const setAddressListSuccess = (list) => ({
  type: SET_ADDRESS_LIST_SUCCESS,
  payload: { list }
});

export const setAddressListFailure = (error) => ({
  type: SET_ADDRESS_LIST_FAILURE,
  payload: { error }
});
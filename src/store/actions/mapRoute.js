export const SET_ROUTE_SUCCESS = 'SET_ROUTE_SUCCESS';
export const SET_ROUTE_FAILURE = 'SET_ROUTE_FAILURE';
export const GET_ROUTE = 'GET_ROUTE';

export const setRouteSuccess = (route) => ({
  type: SET_ROUTE_SUCCESS,
  payload: { route }
});

export const setRouteFailure = (error) => ({
  type: SET_ROUTE_FAILURE,
  payload: { error }
});

export const getRoute = (startAddress, endAddress) => ({
  type: GET_ROUTE,
  payload: { startAddress, endAddress }
});
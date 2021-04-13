export const ROUTE = 'ROUTE';
export const GET_ROUTE = 'GET_ROUTE';

export const setRoute = (route) => ({
  type: ROUTE,
  payload: { route }
});

export const getRoute = (startAddress, endAddress) => ({
  type: GET_ROUTE,
  payload: { startAddress, endAddress }
});
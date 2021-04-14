import { SET_ROUTE_SUCCESS, SET_ROUTE_FAILURE } from '../actions/mapRoute';

const initialState = {
  route: [],
  error: ''
}

export default function mapRoute(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTE_SUCCESS: {
      return {
        route: action.payload.route,
        error: ''
      };
    }

    case SET_ROUTE_FAILURE: {
      return {
        route: [],
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
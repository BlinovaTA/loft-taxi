import { ROUTE } from '../actions/mapRoute';

const initialState = {
  route: []
}

export default function mapRoute(state = initialState, action) {
  switch (action.type) {
    case ROUTE: {
      return {
        route: action.payload.route
      };
    }

    default: {
      return state;
    }
  }
}
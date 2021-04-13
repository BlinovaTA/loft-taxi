import { SET_ADDRESS_LIST } from '../actions/address';

const initialState = {
  startAddress: '',
  endAddress: '',
  addressList: []
}

export default function address(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS_LIST: {
      return {
        ...state,
        addressList: action.payload.addressList
      };
    }

    default: {
      return state;
    }
  }
}
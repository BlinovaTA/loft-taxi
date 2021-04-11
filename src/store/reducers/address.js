import { START_ADDRESS, END_ADDRESS, ADDRESS_LIST } from '../actions/address';

const initialState = {
  startAddress: '',
  endAddress: '',
  addressList: []
}

export default function address(state = initialState, action) {
  switch (action.type) {
    case START_ADDRESS: {
      return {
        ...state,
        startAddress: action.payload.startAddress
      };
    }

    case END_ADDRESS: {
      return {
        ...state,
        endAddress: action.payload.endAddress
      };
    }

    case ADDRESS_LIST: {
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
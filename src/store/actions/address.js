export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const ADDRESS_LIST = 'ADDRESS_LIST';
export const START_ADDRESS = 'START_ADDRESS';
export const END_ADDRESS = "END_ADDRESS";

export const setStartAddress = (startAddress) => ({
  type: START_ADDRESS,
  payload: { startAddress }
});

export const setEndAddress = (endAddress) => ({
  type: END_ADDRESS,
  payload: { endAddress }
});

export const setAddressList = (addressList) => ({
  type: ADDRESS_LIST,
  payload: { addressList }
});

export const getAddressList = () => ({
  type: GET_ADDRESS_LIST,
});
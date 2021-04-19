export const SET_CARD_SUCCESS = 'SET_CARD_SUCCESS';
export const SET_CARD_FAILURE = 'SET_CARD_FAILURE';
export const SET_CARD_DATA = 'SET_CARD_DATA';
export const GET_CARD_DATA = 'GET_CARD_DATA';

export const setCardSuccess = (cardNumber, expiryDate, cardName, cvc) => ({
  type: SET_CARD_SUCCESS,
  payload: { cardNumber, expiryDate, cardName, cvc },
});

export const setCardFailure = (error) => ({
  type: SET_CARD_FAILURE,
  payload: { error },
});

export const setCardData = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SET_CARD_DATA,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});

export const getCardData = (token) => ({
  type: GET_CARD_DATA,
  payload: { token },
});
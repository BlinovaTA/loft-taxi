export const SET_CARD = 'SET_CARD';
export const SET_CARD_DATA = 'SET_CARD_DATA';
export const GET_CARD_DATA = 'GET_CARD_DATA';

export const setCard = (cardNumber, expiryDate, cardName, cvc) => ({
  type: SET_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc },
});

export const setCardData = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SET_CARD_DATA,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});

export const getCardData = (token) => ({
  type: GET_CARD_DATA,
  payload: { token },
});
import { SET_CARD_SUCCESS, SET_CARD_FAILURE } from '../actions/card';
import { setCardDataToLocalStorage, getCardDataFromLocalStorage } from '../../localstorage';

const localStorageData = getCardDataFromLocalStorage();

const initialState = {
  cardNumber: localStorageData.cardNumber,
  expiryDate: localStorageData.expiryDate,
  cardName: localStorageData.cardName,
  cvc: localStorageData.cvc,
  isPaymentData: localStorageData.isPaymentData,
  error: ''
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case SET_CARD_SUCCESS: {
      const { cardNumber, expiryDate, cardName, cvc } = action.payload;
      setCardDataToLocalStorage(cardNumber, expiryDate, cardName, cvc);

      return {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc,
        isPaymentData: Boolean(cardNumber && expiryDate && cardName && cvc),
        error: ''
      };
    }

    case SET_CARD_FAILURE: {
      return {
        cardNumber: state.cardNumber,
        expiryDate: state.expiryDate,
        cardName: state.cardName,
        cvc: state.cvc,
        isPaymentData: state.isPaymentData,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
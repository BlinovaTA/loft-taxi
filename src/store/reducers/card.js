import { SET_CARD } from '../actions/card';
import { setCardDataToLocalStorage, getCardDataFromLocalStorage } from '../../localstorage';

const localStorageData = getCardDataFromLocalStorage();

const initialState = {
  cardNumber: localStorageData.cardNumber,
  expiryDate: localStorageData.expiryDate,
  cardName: localStorageData.cardName,
  cvc: localStorageData.cvc
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case SET_CARD: {
      const { cardNumber, expiryDate, cardName, cvc } = action.payload;
      setCardDataToLocalStorage(cardNumber, expiryDate, cardName, cvc);

      return {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc
      };
    }

    default: {
      return state;
    }
  }
}
import { AUTHENTICATE, REGISTRATION, logIn } from "../actions/authorization";
import { setCard } from "../actions/card";
import { setLogIn, setRegistration, getCardDataFromServer } from '../../api';

export const authorization = (store) => (next) => async (action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      const { email, password } = action.payload;
      const data = await setLogIn(email, password);

      if (data.success) {
        store.dispatch(logIn(data.token));

        const cardData = await getCardDataFromServer(data.token);

        if (cardData.hasOwnProperty('id')) {
          store.dispatch(setCard(cardData.cardNumber, cardData.expiryDate, cardData.cardName, cardData.cvc));
        }
      }

      break;
    }

    case REGISTRATION: {
      const { email, password, name } = action.payload;
      const data = await setRegistration(email, password, name);

      if (data.success) {
        store.dispatch(logIn(data.token));
      }

      break;
    }

    default: {
      next(action);

      break;
    }
  }
};

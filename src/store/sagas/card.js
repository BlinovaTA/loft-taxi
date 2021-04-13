import { SET_CARD_DATA, GET_CARD_DATA, setCard } from "../actions/card";
import { setCardDataToServer, getCardDataFromServer } from '../../api';
import { takeEvery, call, put } from "redux-saga/effects";

export function* setCardDataSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(setCardDataToServer, cardNumber, expiryDate, cardName, cvc, token);

  if (success) {
    yield put(setCard(cardNumber, expiryDate, cardName, cvc));
  }
}

export function* setCardData() {
  yield takeEvery(SET_CARD_DATA, setCardDataSaga);
}

export function* getCardDataSaga(action) {
  const { token } = action.payload;
  const data = yield call(getCardDataFromServer, token);

  if (data.hasOwnProperty('id')) {
    yield put(setCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc));
  }
}

export function* getCardData() {
  yield takeEvery(GET_CARD_DATA, getCardDataSaga);
}
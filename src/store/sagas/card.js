import { SET_CARD_DATA, GET_CARD_DATA, setCardSuccess, setCardFailure } from "../actions/card";
import { setCardDataToServer, getCardDataFromServer } from '../../api';
import { takeEvery, call, put } from "redux-saga/effects";

export function* setCardDataSaga(action) {
  try {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
    const success = yield call(setCardDataToServer, cardNumber, expiryDate, cardName, cvc, token);

    if (success) {
      yield put(setCardSuccess(cardNumber, expiryDate, cardName, cvc));
    } else {
      yield put(setCardFailure('Не удалось сохранить данные карты на сервер'));
    }
  } catch {
    yield put(setCardFailure('Сервер не отвечает'));
  }
}

export function* setCardData() {
  yield takeEvery(SET_CARD_DATA, setCardDataSaga);
}

export function* getCardDataSaga(action) {
  try {
    const { token } = action.payload;
    const data = yield call(getCardDataFromServer, token);

    if (data.hasOwnProperty('id')) {
      yield put(setCardSuccess(data.cardNumber, data.expiryDate, data.cardName, data.cvc));
    } else {
      yield put(setCardFailure('Не удалось получить данные карты с сервера'));
    }
  } catch {
    yield put(setCardFailure('Сервер не отвечает'));
  }
}

export function* getCardData() {
  yield takeEvery(GET_CARD_DATA, getCardDataSaga);
}
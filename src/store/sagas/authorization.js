import { AUTHENTICATE, REGISTRATION, logIn } from "../actions/authorization";
import { setCard } from "../actions/card";
import { setLogIn, getCardDataFromServer, setRegistrationToServer } from "../../api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(setLogIn, email, password);

  if (data.success) {
    yield put(logIn(data.token));

    const cardData = yield call(getCardDataFromServer, data.token);

    if (cardData.hasOwnProperty('id')) {
      yield put(setCard(cardData.cardNumber, cardData.expiryDate, cardData.cardName, cardData.cvc));
    }
  }
}

export function* authorizationSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}

export function* setRegistration(action) {
  const { email, password, name } = action.payload;
  const data = yield call(setRegistrationToServer, email, password, name);

  if (data.success) {
    yield put(logIn(data.token));

  }
}

export function* registrationSaga() {
  yield takeEvery(REGISTRATION, setRegistration);
}
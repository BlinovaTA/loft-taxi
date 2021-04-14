import { AUTHENTICATE, REGISTRATION, logInSuccess, logInFailure } from "../actions/authorization";
import { setLogIn, setRegistrationToServer } from "../../api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authenticateSaga(action) {
  try {
    const { email, password } = action.payload;
    const data = yield call(setLogIn, email, password);

    if (data.success) {
      yield put(logInSuccess(data.token));
    } else {
      yield put(logInFailure({authorization: 'Ошибка авторизации', registration: ''}));
    }
  } catch {
    yield put(logInFailure({authorization: 'Сервер не отвечает', registration: ''}));
  }
}

export function* authorizationSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}

export function* setRegistration(action) {
  try {
    const { email, password, name } = action.payload;
    const data = yield call(setRegistrationToServer, email, password, name);

    if (data.success) {
      yield put(logInSuccess(data.token));
    } else {
      yield put(logInFailure({authorization: '', registration: 'Ошибка регистрации'}));
    }
  } catch {
    yield put(logInFailure({authorization: '', registration: 'Сервер не отвечает'}));
  }

}

export function* registrationSaga() {
  yield takeEvery(REGISTRATION, setRegistration);
}
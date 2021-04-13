import { fork, all } from "redux-saga/effects";
import { authorizationSaga, registrationSaga } from './authorization';
import { setCardData, getCardData } from './card';
import { getAddressList } from './address';
import { getRoute } from './mapRoute';

export default function* rootSaga() {
  yield all([
    fork(authorizationSaga),
    fork(registrationSaga),
    fork(setCardData),
    fork(getCardData),
    fork(getAddressList),
    fork(getRoute)
  ]);
}
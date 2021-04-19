import { GET_ADDRESS_LIST, setAddressListSuccess, setAddressListFailure } from "../actions/address";
import { getAddressListFromServer } from '../../api';
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressListSaga() {
  try {
    const data = yield call(getAddressListFromServer);

    if (data.hasOwnProperty('addresses')) {
      const addresses = data.addresses.map(item => ({ value: item, label: item }))

      yield put(setAddressListSuccess(addresses));
    } else {
      yield put(setAddressListFailure('Ошибка загрузки списка адресов'));
    }
  } catch {
    yield put(setAddressListFailure('Сервер не отвечает'));
  }
}

export function* getAddressList() {
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);
}
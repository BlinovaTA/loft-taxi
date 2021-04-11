import { GET_ADDRESS_LIST, setAddressList } from "../actions/address";
import { getAddressListFromServer } from '../../api';
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressListSaga(action) {
  const data = yield call(getAddressListFromServer);

  if (data.hasOwnProperty('addresses')) {
    const addresses = data.addresses.reduce((prev, item) => {
      prev.push({value: item, label: item});

      return prev;
    }, []);

    yield put(setAddressList(addresses));
  }
}

export function* getAddressList() {
  yield takeEvery(GET_ADDRESS_LIST, addressListSaga);
}
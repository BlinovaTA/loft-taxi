import { GET_ROUTE, setRoute } from "../actions/mapRoute";
import { getRouteFromServer } from '../../api';
import { takeEvery, call, put } from "redux-saga/effects";

export function* routeSaga(action) {
  const { startAddress, endAddress } = action.payload;
  const data = yield call(getRouteFromServer, startAddress, endAddress);

  if (data.length > 0) {
    yield put(setRoute(data));
  }
}

export function* getRoute() {
  yield takeEvery(GET_ROUTE, routeSaga);
}
import { GET_ROUTE, setRouteSuccess, setRouteFailure } from "../actions/mapRoute";
import { getRouteFromServer } from '../../api';
import { takeEvery, call, put } from "redux-saga/effects";

export function* routeSaga(action) {
  try {
    const { startAddress, endAddress } = action.payload;
    const data = yield call(getRouteFromServer, startAddress, endAddress);

    if (data && data.length) {
      yield put(setRouteSuccess(data));
    } else {
      yield put(setRouteFailure('Ошибка получения маршрута'));
    }
  } catch {
    yield put(setRouteFailure('Сервер не отвечает'));
  }
}

export function* getRoute() {
  yield takeEvery(GET_ROUTE, routeSaga);
}
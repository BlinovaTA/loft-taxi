import { routeSaga } from '../mapRoute';
import { getRoute, SET_ROUTE_SUCCESS, SET_ROUTE_FAILURE } from '../../actions/mapRoute';
import { getRouteFromServer } from '../../../api';
import { recordSaga } from "./recordSaga";

jest.mock('../../../api', () => ({
  getRouteFromServer: jest.fn(() => ([[1, 2], [3, 4]]))
}));

describe('map route saga', () => {
  afterAll(jest.clearAllMocks);

  it('correct credentials', async () => {
    getRouteFromServer.mockImplementation(async () => ([[1, 2], [3, 4]]));

    const dispatched = await recordSaga(
      routeSaga,
      getRoute('startAddress', 'endAddress')
    );

    expect(dispatched).toEqual([
      {
        type: SET_ROUTE_SUCCESS,
        payload: {
          route: [[1, 2], [3, 4]],
        }
      }
    ]);
  });

  it('wrong credentials', async () => {
    getRouteFromServer.mockImplementation(() => false);

    const dispatched = await recordSaga(
      routeSaga,
      getRoute('startAddress', 'endAddress')
    );

    expect(dispatched).toEqual([
      {
        type: SET_ROUTE_FAILURE,
        payload: {
          error: 'Ошибка получения маршрута'
        }
      }
    ]);
  });
});
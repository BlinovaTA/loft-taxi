import { routeSaga } from '../mapRoute';
import { getRoute } from '../../actions/mapRoute';
import { getRouteFromServer } from '../../../api';
import { recordSaga } from "./recordSaga";

jest.mock('../../../api', () => ({
  getRouteFromServer: jest.fn(() => ([[1, 2], [3, 4]]))
}));

describe('map route saga', () => {
  afterAll(jest.clearAllMocks);

  describe('#ROUTE', () => {
    describe('with correct credentials', () => {
      it('card through api', async () => {
        getRouteFromServer.mockImplementation(async () => ([[1, 2], [3, 4]]));

        const dispatched = await recordSaga(
          routeSaga,
          getRoute('startAddress', 'endAddress')
        );

        expect(dispatched).toEqual([
          {
            type: 'ROUTE',
            payload: {
              route: [[1, 2], [3, 4]]
            }
          }
        ]);
      });
    });

    describe('with wrong credentials', () => {
      it('card through api', async () => {
        getRouteFromServer.mockImplementation(() => false);

        const dispatched = await recordSaga(
          routeSaga,
          getRoute('startAddress', 'endAddress')
        );

        expect(dispatched).toEqual([]);
      });
    });
  });
});
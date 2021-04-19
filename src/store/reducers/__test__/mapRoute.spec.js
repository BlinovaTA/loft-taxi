import mapRoute from '../mapRoute';
import { setRouteSuccess, setRouteFailure } from '../../actions/mapRoute';

describe("map route", () => {
  it('route success', () => {
    expect(mapRoute({}, setRouteSuccess([[1, 2], [3, 4]])))
      .toEqual({
        route: [[1, 2], [3, 4]],
        error: ''
      })
  });

  it('route failure', () => {
    expect(mapRoute({}, setRouteFailure('error')))
      .toEqual({
        route: [],
        error: 'error'
      })
  });
});
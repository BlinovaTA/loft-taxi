import mapRoute from '../mapRoute'
import { setRoute } from '../../actions/mapRoute'

describe("map route", () => {
  it('returns map route', () => {
    expect(mapRoute({}, setRoute([[1, 2], [3, 4]])))
      .toEqual({
        route: [[1, 2], [3, 4]]
      })
  });
});
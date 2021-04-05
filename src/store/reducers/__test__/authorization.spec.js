import authorization from '../authorization'
import { logIn, logOut } from '../../actions/authorization'

describe("authorization", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn true and token', () => {
      expect(authorization({}, logIn('token'))).toEqual({ isLoggedIn: true, token: 'token' })
    });
  });

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn false and empty token', () => {
      expect(authorization({}, logOut())).toEqual({ isLoggedIn: false, token: '' })
    });
  });
});
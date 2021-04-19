import authorization from '../authorization';
import { logInSuccess, logInFailure, logOut } from '../../actions/authorization';

describe("authorization", () => {
  it('#LOG_IN_SUCCESS', () => {
    expect(authorization({}, logInSuccess('token'))).toEqual({
      isLoggedIn: true,
      token: 'token',
      error: ''
    })
  });

  it('#LOG_IN_FAILURE', () => {
    expect(authorization({}, logInFailure('error'))).toEqual({
      isLoggedIn: false,
      token: '',
      error: 'error'
    })
  });

  it('#LOG_OUT', () => {
    expect(authorization({}, logOut())).toEqual({
      isLoggedIn: false,
      token: '',
      error: ''
    })
  });
});
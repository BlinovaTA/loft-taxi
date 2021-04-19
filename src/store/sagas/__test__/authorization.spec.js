import { authenticateSaga, setRegistration } from "../authorization";
import { authenticate, registration, LOG_IN_FAILURE, LOG_IN_SUCCESS } from "../../actions/authorization";
import { recordSaga } from "./recordSaga";
import { setLogIn, setRegistrationToServer } from '../../../api';

jest.mock("../../../api", () => ({
  setLogIn: jest.fn(() => ({ success: true, token: 'TOKEN' })),
  setRegistrationToServer: jest.fn(() => ({ success: true, token: 'TOKEN' })),
}));

describe("authenticate", () => {
  afterAll(jest.clearAllMocks);

  it("correct credentials", async () => {
    setLogIn.mockImplementation(async () => ({ success: true, token: 'TOKEN' }));

    const dispatched = await recordSaga(
      authenticateSaga,
      authenticate("testlogin", "testpassword")
    );

    expect(dispatched).toEqual([
      {
        type: LOG_IN_SUCCESS,
        payload: {
          token: 'TOKEN'
        }
      }
    ]);
  });

  it("wrong credentials", async () => {
    setLogIn.mockImplementation(async () => ({ success: false }));

    const dispatched = await recordSaga(
      authenticateSaga,
      authenticate("testlogin", "testpassword")
    );

    expect(dispatched).toEqual([
      {
        type: LOG_IN_FAILURE,
        payload: {
          error: {
            authorization: 'Ошибка авторизации',
            registration: ''
          }
        }
      }
    ]);
  });
});

describe("registration", () => {
  afterAll(jest.clearAllMocks);

  it("correct credentials", async () => {
    setRegistrationToServer.mockImplementation(async () => ({ success: true, token: 'TOKEN' }));

    const dispatched = await recordSaga(
      setRegistration,
      registration("testlogin", "testpassword", "testname")
    );

    expect(dispatched).toEqual([
      {
        type: LOG_IN_SUCCESS,
        payload: {
          token: 'TOKEN'
        }
      },
    ]);
  });

  it("wrong credentials", async () => {
    setRegistrationToServer.mockImplementation(async () => ({ success: false }));

    const dispatched = await recordSaga(
      setRegistration,
      registration("testlogin", "testpassword", "testname")
    );

    expect(dispatched).toEqual([
      {
        type: LOG_IN_FAILURE,
        payload: {
          error: {
            authorization: '',
            registration: 'Ошибка регистрации'
          }
        }
      }
    ]);
  });
});
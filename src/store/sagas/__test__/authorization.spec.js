import { authenticateSaga, setRegistration } from "../authorization";
import { authenticate, registration } from "../../actions/authorization";
import { recordSaga } from "./recordSaga";
import { setLogIn, setRegistrationToServer, getCardDataFromServer } from '../../../api';

jest.mock("../../../api", () => ({
  setLogIn: jest.fn(() => ({ success: true, token: 'TOKEN' })),
  setRegistrationToServer: jest.fn(() => ({ success: true, token: 'TOKEN' })),
  getCardDataFromServer: jest.fn(() => ({ id: 'testid', cardNumber: '1234 1234 1234 1234', expiryDate: '12/21', cardName: 'testname', cvc: '123' }))
}));

describe("#AUTHENTICATE", () => {
  afterAll(jest.clearAllMocks);

  it("correct credentials", async () => {

    setLogIn.mockImplementation(async () => ({ success: true, token: 'TOKEN' }));
    getCardDataFromServer.mockImplementation(async () => ({
      id: 'testid',
      cardNumber: '1234 1234 1234 1234',
      expiryDate: '12/21',
      cardName: 'testname',
      cvc: '123'
    }));

    const dispatched = await recordSaga(
      authenticateSaga,
      authenticate("testlogin", "testpassword")
    );

    expect(dispatched).toEqual([
      {
        type: "LOG_IN",
        payload: {
          token: 'TOKEN'
        }
      },
      {
        type: 'SET_CARD',
        payload: {
          cardNumber: '1234 1234 1234 1234',
          expiryDate: '12/21',
          cardName: 'testname',
          cvc: '123'
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

    expect(dispatched).toEqual([]);
  });
});

describe("#REGISTRATION", () => {
  afterAll(jest.clearAllMocks);

  it("correct credentials", async () => {

    setRegistrationToServer.mockImplementation(async () => ({ success: true, token: 'TOKEN' }));

    const dispatched = await recordSaga(
      setRegistration,
      registration("testlogin", "testpassword", "testname")
    );

    expect(dispatched).toEqual([
      {
        type: "LOG_IN",
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

    expect(dispatched).toEqual([]);
  });
});
import { authorization } from '../authorization';
import { authenticate, registration } from '../../actions/authorization';
import { setLogIn, setRegistration, getCardDataFromServer } from '../../../api';

jest.mock('../../../api', () => ({
  setLogIn: jest.fn(() => ({ success: true, token: 'TOKEN' })),
  setRegistration: jest.fn(() => ({ success: true, token: 'TOKEN' })),
  getCardDataFromServer: jest.fn(() => ({ id: 'testid', cardNumber: '1234 1234 1234 1234', expiryDate: '12/21', cardName: 'testname', cvc: '123' }))
}));

describe('authorization middleware', () => {
  afterAll(jest.clearAllMocks);

  describe('#AUTHENTICATE', () => {
    describe('with correct credentials', () => {
      it('authenticates through api', async () => {
        setLogIn.mockImplementation(async () => ({ success: true, token: 'TOKEN' }));
        getCardDataFromServer.mockImplementation(async () => ({ 
          id: 'testid', 
          cardNumber: '1234 1234 1234 1234', 
          expiryDate: '12/21', 
          cardName: 'testname', 
          cvc: '123' 
        }));

        const dispatch = jest.fn();

        await authorization({ dispatch })()(
          authenticate('testlogin', 'testpassword')
        );

        expect(setLogIn).toBeCalledWith('testlogin', 'testpassword');

        expect(dispatch).toBeCalledWith({
          type: 'LOG_IN',
          payload: {
            token: 'TOKEN',
          },
        });

        expect(dispatch).toBeCalledWith({
          type: 'SET_CARD',
          payload: {
            cardNumber: '1234 1234 1234 1234', 
            expiryDate: '12/21', 
            cardName: 'testname', 
            cvc: '123' 
          },
        });

        
      });
    });

    describe('with wrong credentials', () => {
      it('authenticates through api', async () => {
        setLogIn.mockImplementation(() => ({ success: false }));

        const dispatch = jest.fn();

        await authorization({ dispatch })()(
          authenticate('testlogin', 'testpassword')
        );

        expect(dispatch).not.toBeCalled();
      });
    });
  });

  describe('#REGISTRATION', () => {
    describe('with correct credentials', () => {
      it('registration through api', async () => {
        setRegistration.mockImplementation(async () => ({ success: true, token: 'TOKEN' }));

        const dispatch = jest.fn();

        await authorization({ dispatch })()(
          registration('testlogin', 'testpassword', 'testname')
        );

        expect(setRegistration).toBeCalledWith('testlogin', 'testpassword', 'testname');

        expect(dispatch).toBeCalledWith({
          type: 'LOG_IN',
          payload: {
            'token': 'TOKEN',
          },
        });


      });
    });

    describe('with wrong credentials', () => {
      it('registration through api', async () => {
        setRegistration.mockImplementation(() => ({ success: false }));
        const dispatch = jest.fn();

        await authorization({ dispatch })()(
          registration('testlogin', 'testpassword', 'testname')
        );

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});

import { card } from '../card';
import { setCardData, getCardData } from '../../actions/card';
import { setCardDataToServer, getCardDataFromServer } from '../../../api';

jest.mock('../../../api', () => ({
  getCardDataFromServer: jest.fn(() => ({ id: 'testid', cardNumber: '1234 1234 1234 1234', expiryDate: '12/21', cardName: 'testname', cvc: '123' })),
  setCardDataToServer: jest.fn(() => true)
}));

describe('card middleware', () => {
  afterAll(jest.clearAllMocks);

  describe('#SET_CARD_DATA', () => {
    describe('with correct credentials', () => {
      it('card through api', async () => {
        setCardDataToServer.mockImplementation(async () => true);

        const dispatch = jest.fn();

        await card({ dispatch })()(
          setCardData('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
        );

        expect(setCardDataToServer).toBeCalledWith('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token');

        expect(dispatch).toBeCalledWith({
          type: 'SET_CARD',
          payload: {
            cardNumber: 'cardNumber',
            expiryDate: 'expiryDate',
            cardName: 'cardName',
            cvc: 'cvc'
          }
        });
      });
    });

    describe('with wrong credentials', () => {
      it('card through api', async () => {
        setCardDataToServer.mockImplementation(() => false);

        const dispatch = jest.fn();

        await card({ dispatch })()(
          setCardData('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
        );

        expect(dispatch).not.toBeCalled();
      });
    });
  });

  describe('#GET_CARD_DATA', () => {
    describe('with correct credentials', () => {
      it('card through api', async () => {
        getCardDataFromServer.mockImplementation(async () => ({
          id: 'testid',
          cardNumber: '1234 1234 1234 1234',
          expiryDate: '12/21',
          cardName: 'testname',
          cvc: '123'
        }));

        const dispatch = jest.fn();

        await card({ dispatch })()(
          getCardData('token')
        );

        expect(getCardDataFromServer).toBeCalledWith('token');

        expect(dispatch).toBeCalledWith({
          type: 'SET_CARD',
          payload: {
            cardNumber: '1234 1234 1234 1234',
            expiryDate: '12/21',
            cardName: 'testname',
            cvc: '123'
          }
        });
      });
    });

    describe('with wrong credentials', () => {
      it('card through api', async () => {
        getCardDataFromServer.mockImplementation(() => ({ success: false }));
        const dispatch = jest.fn();

        await card({ dispatch })()(
          getCardData('token')
        );

        expect(dispatch).not.toBeCalled();
      });
    });
  });
});

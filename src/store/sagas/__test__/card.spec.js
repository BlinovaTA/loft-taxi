import { setCardDataSaga, getCardDataSaga } from '../card';
import { setCardData, getCardData } from '../../actions/card';
import { setCardDataToServer, getCardDataFromServer } from '../../../api';
import { recordSaga } from "./recordSaga";

jest.mock('../../../api', () => ({
  getCardDataFromServer: jest.fn(() => ({ id: 'testid', cardNumber: '1234 1234 1234 1234', expiryDate: '12/21', cardName: 'testname', cvc: '123' })),
  setCardDataToServer: jest.fn(() => true)
}));

describe('card saga', () => {
  afterAll(jest.clearAllMocks);

  describe('#SET_CARD_DATA', () => {
    describe('with correct credentials', () => {
      it('card through api', async () => {
        setCardDataToServer.mockImplementation(async () => true);

        const dispatched = await recordSaga(
          setCardDataSaga,
          setCardData('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
        );

        expect(dispatched).toEqual([
          {
            type: 'SET_CARD',
            payload: {
              cardNumber: 'cardNumber',
              expiryDate: 'expiryDate',
              cardName: 'cardName',
              cvc: 'cvc'
            }
          }
        ]);
      });
    });

    describe('with wrong credentials', () => {
      it('card through api', async () => {
        setCardDataToServer.mockImplementation(() => false);

        const dispatched = await recordSaga(
          setCardDataSaga,
          setCardData('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
        );

        expect(dispatched).toEqual([]);
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

        const dispatched = await recordSaga(
          getCardDataSaga,
          getCardData('token')
        );

        expect(dispatched).toEqual([
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
    });

    describe('with wrong credentials', () => {
      it('card through api', async () => {
        getCardDataFromServer.mockImplementation(() => ({ success: false }));

        const dispatched = await recordSaga(
          getCardDataSaga,
          getCardData('token')
        );

        expect(dispatched).toEqual([]);
      });
    });
  });
});
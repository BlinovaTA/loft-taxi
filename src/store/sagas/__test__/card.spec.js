import { setCardDataSaga, getCardDataSaga } from '../card';
import { setCardData, getCardData, SET_CARD_SUCCESS, SET_CARD_FAILURE } from '../../actions/card';
import { setCardDataToServer, getCardDataFromServer } from '../../../api';
import { recordSaga } from "./recordSaga";

jest.mock('../../../api', () => ({
  getCardDataFromServer: jest.fn(() => ({ id: 'testid', cardNumber: '1234 1234 1234 1234', expiryDate: '12/21', cardName: 'testname', cvc: '123' })),
  setCardDataToServer: jest.fn(() => true)
}));

describe('card saga', () => {
  afterAll(jest.clearAllMocks);

  describe('setCardData', () => {
    it('correct credentials', async () => {
      setCardDataToServer.mockImplementation(async () => true);

      const dispatched = await recordSaga(
        setCardDataSaga,
        setCardData('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
      );

      expect(dispatched).toEqual([
        {
          type: SET_CARD_SUCCESS,
          payload: {
            cardNumber: 'cardNumber',
            expiryDate: 'expiryDate',
            cardName: 'cardName',
            cvc: 'cvc'
          }
        }
      ]);
    });

    it('wrong credentials', async () => {
      setCardDataToServer.mockImplementation(() => false);

      const dispatched = await recordSaga(
        setCardDataSaga,
        setCardData('cardNumber', 'expiryDate', 'cardName', 'cvc', 'token')
      );

      expect(dispatched).toEqual([
        {
          type: SET_CARD_FAILURE,
          payload: {
            error: 'Не удалось сохранить данные карты на сервер'
          }
        }
      ]);
    });
  });

  describe('getCardData', () => {
    it('correct credentials', async () => {
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
          type: SET_CARD_SUCCESS,
          payload: {
            cardNumber: '1234 1234 1234 1234',
            expiryDate: '12/21',
            cardName: 'testname',
            cvc: '123'
          }
        }
      ]);
    });

    it('wrong credentials', async () => {
      getCardDataFromServer.mockImplementation(() => ({ success: false }));

      const dispatched = await recordSaga(
        getCardDataSaga,
        getCardData('token')
      );

      expect(dispatched).toEqual([
        {
          type: SET_CARD_FAILURE,
          payload: {
            error: 'Не удалось получить данные карты с сервера'
          }
        }
      ]);
    });
  });
});
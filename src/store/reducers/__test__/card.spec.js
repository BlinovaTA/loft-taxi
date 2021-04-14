import card from '../card';
import { setCardSuccess, setCardFailure } from '../../actions/card';

describe("card", () => {
  it('set card success', () => {
    expect(card({}, setCardSuccess('cardNumber', 'expiryDate', 'cardName', 'cvc')))
      .toEqual({
        cardNumber: 'cardNumber',
        expiryDate: 'expiryDate',
        cardName: 'cardName',
        cvc: 'cvc',
        isPaymentData: true,
        error: ''
      })
  });

  it('set card failure', () => {
    const state = { cardNumber: 'cardNumber', expiryDate: 'expiryDate', cardName: 'cardName', cvc: 'cvc', isPaymentData: true };

    expect(card(state, setCardFailure('error')))
      .toEqual({
        cardNumber: state.cardNumber,
        expiryDate: state.expiryDate,
        cardName: state.cardName,
        cvc: state.cvc,
        isPaymentData: state.isPaymentData,
        error: 'error'
      })
  });
});
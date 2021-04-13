import card from '../card'
import { setCard } from '../../actions/card'

describe("card", () => {
  describe("#SET_CARD", () => {
    it('returns card data', () => {
      expect(card({}, setCard('cardNumber', 'expiryDate', 'cardName', 'cvc')))
        .toEqual({ cardNumber: 'cardNumber', expiryDate: 'expiryDate', cardName: 'cardName', cvc: 'cvc', isPaymentData: true })
    });
  });
});
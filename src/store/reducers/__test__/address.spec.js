import address from '../address'
import { setAddressList, setStartAddress, setEndAddress } from '../../actions/address'

describe("address", () => {
  it('returns address list data', () => {
    expect(address({}, setAddressList([{
      label: 'address1',
      value: 'address1'
    }, {
      label: 'address2',
      value: 'address2'
    }])))
      .toEqual({
        addressList: [{
          label: 'address1',
          value: 'address1'
        }, {
          label: 'address2',
          value: 'address2'
        }]
      })
  });
});
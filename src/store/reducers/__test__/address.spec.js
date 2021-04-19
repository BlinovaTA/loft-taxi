import address from '../address';
import { setAddressListSuccess, setAddressListFailure, getAddressList } from '../../actions/address';

describe("address", () => {
  it('set address list success', () => {
    expect(address({}, setAddressListSuccess([{
      label: 'address1',
      value: 'address1'
    }, {
      label: 'address2',
      value: 'address2'
    }])))
      .toEqual({
        list: [{
          label: 'address1',
          value: 'address1'
        }, {
          label: 'address2',
          value: 'address2'
        }],
        error: '',
        isLoading: false
      })
  });

  it('set address list failure', () => {
    expect(address({}, setAddressListFailure('error')))
      .toEqual({
        list: [],
        error: 'error',
        isLoading: false
      })
  });

  it('set address list failure', () => {
    expect(address({}, getAddressList()))
      .toEqual({
        list: [],
        error: '',
        isLoading: true
      })
  });
});
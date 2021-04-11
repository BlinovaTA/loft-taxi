import { addressListSaga } from '../address';
import { getAddressList } from '../../actions/address';
import { getAddressListFromServer } from '../../../api';
import { recordSaga } from "./recordSaga";

jest.mock('../../../api', () => ({
  getAddressListFromServer: jest.fn(() => ({ "addresses": ['address1', 'address2'] }))
}));

describe('address saga', () => {
  afterAll(jest.clearAllMocks);

  describe('#ADDRESS_LIST', () => {
    describe('with correct credentials', () => {
      it('card through api', async () => {
        getAddressListFromServer.mockImplementation(async () => ({ "addresses": ['address1', 'address2'] }));

        const dispatched = await recordSaga(
          addressListSaga,
          getAddressList()
        );

        expect(dispatched).toEqual([
          {
            type: 'ADDRESS_LIST',
            payload: {
              addressList: [{
                label: 'address1',
                value: 'address1'
              }, {
                label: 'address2',
                value: 'address2'
              }]
            }
          }
        ]);
      });
    });

    describe('with wrong credentials', () => {
      it('card through api', async () => {
        getAddressListFromServer.mockImplementation(() => false);

        const dispatched = await recordSaga(
          addressListSaga,
          getAddressList()
        );

        expect(dispatched).toEqual([]);
      });
    });
  });
});
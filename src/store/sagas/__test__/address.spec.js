import { addressListSaga } from '../address';
import { getAddressList, SET_ADDRESS_LIST_FAILURE, SET_ADDRESS_LIST_SUCCESS } from '../../actions/address';
import { getAddressListFromServer } from '../../../api';
import { recordSaga } from "./recordSaga";

jest.mock('../../../api', () => ({
  getAddressListFromServer: jest.fn(() => ({ "addresses": ['address1', 'address2'] }))
}));

describe('address saga', () => {
  afterAll(jest.clearAllMocks);

  it('correct credential', async () => {
    getAddressListFromServer.mockImplementation(async () => ({ "addresses": ['address1', 'address2'] }));

    const dispatched = await recordSaga(
      addressListSaga,
      getAddressList()
    );

    expect(dispatched).toEqual([
      {
        type: SET_ADDRESS_LIST_SUCCESS,
        payload: {
          list: [{
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

  it('wrong credentials', async () => {
    getAddressListFromServer.mockImplementation(() => false);

    const dispatched = await recordSaga(
      addressListSaga,
      getAddressList()
    );

    expect(dispatched).toEqual([
      {
        type: SET_ADDRESS_LIST_FAILURE,
        payload: {
          error: 'Ошибка загрузки списка адресов',
        }
      }
    ]);
  });
});
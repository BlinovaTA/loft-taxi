import React from 'react';
import Profile from '../profile-page';
import { render, fireEvent, act } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SET_CARD_DATA } from '../../store/actions/card';

describe("profile page", () => {
  it("renders correctly", async () => {
    const mockDispatch = jest.fn();
    const mockStore = {
      getState: () => ({
        authorization: {
          token: 'TOKEN'
        },
        card: {
          error: 'error',
          cardNumber: 'cardNumber',
          expiryDate: 'expiryDate',
          cardName: 'cardName',
          cvc: 'cvc'
        }
      }),
      subscribe: () => { },
      dispatch: () => { },
    };

    const history = createMemoryHistory();

    const { getByLabelText, getByTestId } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Profile useDispatchHook={() => mockDispatch} />
        </Provider>
      </Router>
    );

    const nameInput = getByLabelText("Имя владельца");
    const cardNumberInput = getByLabelText("Номер карты");
    const expiryDateInput = getByLabelText("MM/YY");
    const cvcInput = getByLabelText("CVC");

    expect(nameInput).toHaveAttribute("name", "cardName");
    expect(cardNumberInput).toHaveAttribute("name", "cardNumber");
    expect(expiryDateInput).toHaveAttribute("name", "expiryDate");
    expect(cvcInput).toHaveAttribute("name", "cvc");

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "name" } });
      fireEvent.change(cardNumberInput, { target: { value: "cardNumber" } });
      fireEvent.change(expiryDateInput, { target: { value: "expiryDate" } });
      fireEvent.change(cvcInput, { target: { value: "cvc" } });
      fireEvent.click(getByTestId("save"));
    });

    expect(mockDispatch).toBeCalledWith({
      payload: {
        cardName: "name",
        cardNumber: "cardNumber",
        expiryDate: "expiryDate",
        cvc: "cvc",
        token: "TOKEN"
      },
      type: SET_CARD_DATA,
    });
  })
})

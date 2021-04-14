import React from 'react';
import Profile from '../profile-page';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("login form", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ authorization: { token: 'TOKEN' }, card: { error: 'error' } }),
      subscribe: () => { },
      dispatch: () => { },
    };

    const history = createMemoryHistory();

    const { getByLabelText } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Profile />
        </Provider>
      </Router>
    );

    expect(getByLabelText("Имя владельца")).toHaveAttribute("name", "cardName");
    expect(getByLabelText("Номер карты")).toHaveAttribute("name", "cardNumber");
    expect(getByLabelText("MM/YY")).toHaveAttribute("name", "expiryDate");
    expect(getByLabelText("CVC")).toHaveAttribute("name", "cvc");
  })
})

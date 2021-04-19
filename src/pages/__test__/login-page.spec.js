import React from 'react';
import LoginPage from '../login-page';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("../../components/login", () => () => <div>Login</div>);
jest.mock("../../components/registration", () => () => <div>Registration</div>);

describe("login form", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ authorization: { isLoggedIn: true, error: { authorization: '', registration: '' } } }),
      subscribe: () => { },
      dispatch: () => { },
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <LoginPage />
        </Provider>
      </Router>);

    expect(container.innerHTML).toMatch("Login");
  })
})
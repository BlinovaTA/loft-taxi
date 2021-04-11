import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("../pages/login-page", () => () => <div>Login content</div>);
jest.mock("../pages/map-page", () => () => <div>Map content</div>);
jest.mock("../pages/profile-page", () => () => <div>Profile content</div>);

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ authorization: { isLoggedIn: true, token: 'TOKEN'} }),
      subscribe: () => { },
      dispatch: () => { },
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );

    expect(container.innerHTML).toMatch("Login content");
  });
});

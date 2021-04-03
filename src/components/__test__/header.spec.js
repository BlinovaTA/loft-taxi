import React from "react";
import Header from "../header";
import { PAGES } from '../../constants';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

describe("Header", () => {
  describe("when clicked on navigation buttons", () => {
    it("map active", () => {
      const mockStore = {
        getState: () => ({ authorization: { token: 'TOKEN' } }),
        subscribe: () => { },
        dispatch: () => { },
      };
      const history = createMemoryHistory();

      const map = renderer.create(
        <Router history={history}>
          <Provider store={mockStore}>
            <Header page={PAGES.map.key} />
          </Provider>
        </Router>
      ).toJSON();

      expect(map).toMatchSnapshot();
    });

    it("profile active", () => {
      const mockStore = {
        getState: () => ({ authorization: { token: 'TOKEN' } }),
        subscribe: () => { },
        dispatch: () => { },
      };
      const history = createMemoryHistory();

      const profile = renderer.create(
        <Router history={history}>
          <Provider store={mockStore}>
            <Header page={PAGES.profile.key} />
          </Provider>
        </Router>
      ).toJSON();

      expect(profile).toMatchSnapshot();
    });

    it("login active", () => {
      const mockStore = {
        getState: () => ({ authorization: { token: 'TOKEN' } }),
        subscribe: () => { },
        dispatch: () => { },
      };
      const history = createMemoryHistory();

      const login = renderer.create(
        <Router history={history}>
          <Provider store={mockStore}>
            <Header page={PAGES.login.key} />
          </Provider>
        </Router>
      ).toJSON();

      expect(login).toMatchSnapshot();
    });
  });
});

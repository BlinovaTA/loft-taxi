import React from "react";
import { AuthorizatonProvider, AuthorizationContext } from "../context/AuthorizationContext";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("AuthorizatonProvider context", () => {
  describe("login", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let login;

      render(
        <AuthorizatonProvider>
          <AuthorizationContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              login = value.login;
              return null;
            }}
          </AuthorizationContext.Consumer>
        </AuthorizatonProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        login("test@test.com", "123");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("logout", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logout;
      let login;

      render(
        <AuthorizatonProvider>
          <AuthorizationContext.Consumer>
            {(value) => {
              logout = value.logout;
              login = value.login;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthorizationContext.Consumer>
        </AuthorizatonProvider>
      );

      act(() => {
        login("test@test.com", "123");
        logout();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});

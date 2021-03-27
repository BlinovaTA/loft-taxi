import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

jest.mock("../pages/login-page", () => () => <div>Login content</div>);
jest.mock("../pages/map-page", () => () => <div>Map content</div>);
jest.mock("../pages/profile-page", () => () => <div>Profile content</div>);

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login content");
  });
});

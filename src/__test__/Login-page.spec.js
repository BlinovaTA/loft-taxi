import React from 'react';
import LoginPage from '../pages/Login-page';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

jest.mock("../components/login", () => () => <div>Login</div>);
jest.mock("../components/registration", () => () => <div>Registration</div>);

describe("login form", () => {
  it("renders correctly", () => {
    const { container } = render(<LoginPage />);
    expect(container.innerHTML).toMatch("Login");
  })
})
import React from 'react';
import Login from '../login';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe("login form", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Login error={'error'} />);

    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");

    const wrapper = shallow(<Login />);
    expect(wrapper.find(".button").text()).toEqual("Войти");
    expect(wrapper.find(".form__to-button").text()).toEqual("Регистрация");
  });
});
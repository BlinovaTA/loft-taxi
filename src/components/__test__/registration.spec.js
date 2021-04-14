import React from 'react';
import Registration from '../registration';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe("registration form", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Registration error={'error'} />);

    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute("name", "password");

    const wrapper = shallow(<Registration />);
    expect(wrapper.find(".button").text()).toEqual("Зарегистрироваться");
    expect(wrapper.find(".form__to-button").text()).toEqual("Войти");
  })
})
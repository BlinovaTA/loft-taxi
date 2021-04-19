import React from 'react';
import Login from '../login';
import { render, fireEvent, act } from '@testing-library/react';
import { shallow } from 'enzyme';
import { AUTHENTICATE } from '../../store/actions/authorization';

describe("login form", () => {
  it("renders correctly", async () => {
    const mockDispatch = jest.fn();
    const form = <Login useDispatchHook={() => mockDispatch} error={'error'} />;
    const { getByLabelText, getByTestId } = render(form);

    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Пароль");

    expect(emailInput).toHaveAttribute("name", "email");
    expect(passwordInput).toHaveAttribute("name", "password");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "testemail" } });
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
      fireEvent.click(getByTestId("login"));
    });

    expect(mockDispatch).toBeCalledWith({
      payload: { email: "testemail", password: "testpassword" },
      type: AUTHENTICATE,
    });

    const wrapper = shallow(form);
    expect(wrapper.find(".button").text()).toEqual("Войти");
    expect(wrapper.find(".form__to-button").text()).toEqual("Регистрация");
  });
});
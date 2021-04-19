import React from 'react';
import Registration from '../registration';
import { render, fireEvent, act } from '@testing-library/react';
import { shallow } from 'enzyme';

describe("registration form", () => {
  it("renders correctly", async () => {
    const mockDispatch = jest.fn();
    const form = <Registration useDispatchHook={() => mockDispatch} error={'error'} />
    const { getByLabelText, getByTestId } = render(form);

    const emailInput = getByLabelText("Email*");
    const nameInput = getByLabelText("Как вас зовут?*");
    const passwordInput = getByLabelText("Придумайте пароль*");

    expect(emailInput).toHaveAttribute("name", "email");
    expect(nameInput).toHaveAttribute("name", "name");
    expect(passwordInput).toHaveAttribute("name", "password");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "testemail" } });
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
      fireEvent.change(nameInput, { target: { value: "testname" } });
      fireEvent.click(getByTestId("registration"));
    });

    expect(mockDispatch).toBeCalledWith({
      payload: { email: "testemail", password: "testpassword", name: 'testname' },
      type: "REGISTRATION",
    });

    const wrapper = shallow(form);
    expect(wrapper.find(".button").text()).toEqual("Зарегистрироваться");
    expect(wrapper.find(".form__to-button").text()).toEqual("Войти");
  })
})
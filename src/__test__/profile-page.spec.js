import React from 'react';
import Profile from '../pages/profile-page';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { PAGES } from '../constants';

describe("login form", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Profile />);
    expect(getByLabelText("Имя владельца")).toHaveAttribute("name", "name");
    expect(getByLabelText("Номер карты")).toHaveAttribute("name", "cardNumber");
    expect(getByLabelText("MM/YY")).toHaveAttribute("name", "cardExpiryDate");
    expect(getByLabelText("CVC")).toHaveAttribute("name", "cvc");
  })

  it("clicked 'saveProfile'", () => {
    const wrapper = shallow(<Profile />);

    expect(wrapper.find(".button").text()).toEqual("Сохранить");
    wrapper.find(".button").simulate("click");
    expect(wrapper.find(".button").text()).toEqual("Перейти на карту");
  })

  it("clicked 'goToMap'", () => {
    let page = '';
    const wrapper = shallow(<Profile setPage={(p) => page = p} />);

    expect(wrapper.find(".button").text()).toEqual("Сохранить");
    wrapper.find(".button").simulate("click");
    expect(wrapper.find(".button").text()).toEqual("Перейти на карту");
    wrapper.find(".button").simulate("click");

    expect(page).toBe(PAGES.map.key);
  })
})
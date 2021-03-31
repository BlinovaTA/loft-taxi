import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { PAGES } from '../constants';

describe("Header", () => {
  describe("when clicked on navigation buttons", () => {
    it("clicked map", () => {
      let page = '';
      const { getByText } = render(<Header setPage={(p) => page = p} />);

      fireEvent.click(getByText('Карта'));
      expect(page).toBe(PAGES.map.key);
    });

    it("clicked profile", () => {
      let page = '';
      const { getByText } = render(<Header setPage={(p) => page = p} />);

      fireEvent.click(getByText('Профиль'));
      expect(page).toBe(PAGES.profile.key);
    });

    it("clicked login", () => {
      let page = '';
      const { getByText } = render(<Header setPage={(p) => page = p} />);

      fireEvent.click(getByText('Выйти'));
      expect(page).toBe(PAGES.login.key);
    });
  });
});

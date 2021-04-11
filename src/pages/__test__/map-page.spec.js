import React from 'react';
import MapPage from '../map-page';
import { render } from '@testing-library/react';

jest.mock("../../components/map", () => () => <div>Map</div>);
jest.mock("../../components/header", () => () => <div>Header</div>);
jest.mock("../../components/RouteForm", () => () => <div>Route form</div>);

describe("map page", () => {
  it("renders correctly", () => {
    const { container } = render(<MapPage />);
    expect(container.innerHTML).toMatch("Map");
    expect(container.innerHTML).toMatch("Header");
    expect(container.innerHTML).toMatch("Route form");
  })
})
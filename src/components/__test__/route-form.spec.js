import React from 'react';
import RouteForm from '../route-form';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("route form", () => {
  it("renders correctly for isPaymentData=false", () => {
    const mockStore = {
      getState: () => ({
        address: {
          list: [{
            label: 'address1',
            value: 'address1'
          }, {
            label: 'address2',
            value: 'address2'
          }],
          error: ''
        },
        card: {
          isPaymentData: false
        },
        mapRoute: {
          error: ''
        }
      }),
      subscribe: () => { },
      dispatch: () => { },
    };

    const history = createMemoryHistory();

    const { getByTestId, getByText } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <RouteForm />
        </Provider>
      </Router>
    );

    expect(getByTestId("no-payment")).toHaveTextContent('Для заказа введите платежные данные на странице');
    expect(getByTestId("no-payment")).toHaveTextContent('Профиль');
  });

  it("renders correctly for isPaymentData=true", () => {
    const mockStore = {
      getState: () => ({
        address: {
          list: [{
            label: 'address1',
            value: 'address1'
          }, {
            label: 'address2',
            value: 'address2'
          }],
          error: ''
        },
        card: {
          isPaymentData: true
        },
        mapRoute: {
          error: ''
        }
      }),
      subscribe: () => { },
      dispatch: () => { },
    };

    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <RouteForm />
        </Provider>
      </Router>
    );

    expect(getByTestId('from')).toHaveTextContent("Откуда");
    expect(getByTestId('to')).toHaveTextContent("Куда");
    expect(getByTestId('order')).toHaveTextContent("Заказать");
  });
});
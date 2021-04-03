import { applyMiddleware, compose } from 'redux';
import { authorization } from './authorization';
import { card } from './card';

export default compose(
  applyMiddleware(authorization),
  applyMiddleware(card)
);
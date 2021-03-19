import React, { Component } from 'react';
import { PAGES, PAGES_KEYS } from '../constants';
import logo from '../img/logo.svg';
import '../scss/header.scss';
import '../scss/menu.scss';

export default class Header extends Component {
  state = { active: this.props.page };

  render() {
    return (
      <header className='header'>
        <div className='header__logo'>
          <img alt='logo' className='logo__img' src={logo} />
        </div>
        <ul className='header__menu menu'>
          {
            PAGES_KEYS.map(page =>
              <li
                key={page}
                className={`menu__item ${this.state.active === page ? ' menu__item--active' : ''}`}
                onClick={() => this.props.setPage(page)}
              >
                {PAGES[page].name}
              </li>
            )
          }
        </ul>
      </header>
    )
  }
}

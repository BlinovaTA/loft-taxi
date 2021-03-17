import React, { Component } from 'react';
import { pages } from '../consts';
import logo from '../img/logo.svg';
import '../scss/header.scss';
import '../scss/menu.scss';

export default class Header extends Component {

  clearAllActive = () => {
    let menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach(item => {
      item.classList.remove('menu__item--active');
    });
  }

  setActive = (e, page) => {
    this.clearAllActive();
    e.target.classList.add('menu__item--active');
    this.props.setPage(page);
  }

  setPage = (e) => {
    this.setActive(e, pages.login);
  }

  showProfile = (e) => {
    this.setActive(e, pages.profile);
  }

  showMap = (e) => {
    this.setActive(e, pages.map);
  }

  render() {
    return (
      <header className='header'>
        <div className='header__logo'>
          <img alt='logo' className='logo__img' src={logo} />
        </div>
        <ul className='header__menu menu'>
          <li className='menu__item menu__item--active' onClick={this.showMap}>Карта</li>
          <li className='menu__item' onClick={this.showProfile}>Профиль</li>
          <li className='menu__item' onClick={this.setPage}>Выйти</li>
        </ul>
      </header>
    )
  }
}

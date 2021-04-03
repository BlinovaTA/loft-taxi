import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authorization';
import { getCardData } from '../store/actions/card';
import { PAGES, PAGES_KEYS } from '../constants';
import logo from '../img/logo.svg';
import '../scss/header.scss';
import '../scss/menu.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    page: PropTypes.string,
  }

  state = { active: this.props.page };

  linkClick = (e) => {
    switch (e.target.id) {
      case PAGES.login.key: {
        this.props.logOut();

        break;
      }

      default:
        break;
    }
  }

  render() {
    return (
      <header className='header'>
        <div className='header__logo'>
          <img alt='logo' className='logo__img' src={logo} />
        </div>
        <ul className='header__menu menu'>
          {
            PAGES_KEYS.map(page =>
              <li key={page}>
                <Link
                  to={PAGES[page].link}
                  onClick={this.linkClick}
                  id={page}
                  className={`menu__item ${this.state.active === page ? ' menu__item--active' : ''}`}
                >
                  {PAGES[page].name}
                </Link>
              </li>
            )
          }
        </ul>
      </header>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    token: state.authorization.token
  }
}

export default connect(mapStateToProps, { logOut, getCardData })(Header);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate, registration } from '../store/actions/authorization';
import Login from '../components/login';
import Registration from '../components/registration';
import icon from '../img/big-logo.svg';
import { PAGES } from '../constants';
import '../scss/login-page.scss';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const formChange = () => {
    setIsLogin(!isLogin);
  }

  const authorization = (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    props.authenticate(email.value, password.value);
  }

  const registration = (e) => {
    e.preventDefault();

    const { email, password, name } = e.target;
    props.registration(email.value, password.value, name.value);
  }

  return (
    <div className='login-page'>
      <div className='login-page__icon'>
        <img className='login-page__img' alt='big-logo' src={icon} />
      </div>
      <div className='login-page__map'>
        {
          isLogin
            ? <Login formChange={formChange} authorization={authorization} />
            : <Registration formChange={formChange} registration={registration} />
        }
      </div>
      {props.isLoggedIn && <Redirect to={PAGES.map.link} />}
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    isLoggedIn: state.authorization.isLoggedIn,
    token: state.authorization.token
  }
}

export default connect(
  mapStateToProps,
  {
    authenticate,
    registration
  }
)(LoginPage);
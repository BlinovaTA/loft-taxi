import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Login from '../components/login';
import Registration from '../components/registration';
import icon from '../img/big-logo.svg';
import { AuthorizationContext } from '../context/authorizationContext';
import { PAGES } from '../constants';
import '../scss/login-page.scss';

const LoginPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const context = useContext(AuthorizationContext);

  const formChange = () => {
    setIsLogin(!isLogin);
  }

  const authorization = (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    const isLogin = context.login(email.value, password.value);

    if (isLogin) {
      props.setPage(PAGES.map.key);
    }
  }

  const registration = (e) => {
    e.preventDefault();

    props.setPage(PAGES.map.key);
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
    </div>
  )
}

LoginPage.propTypes = {
  setPage: PropTypes.func
}

export default LoginPage;
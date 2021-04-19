import React from 'react';
import PropTypes from 'prop-types';
import { authenticate } from "../store/actions/authorization";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Alert from 'antd/lib/alert';
import Input from './input';
import '../scss/form.scss';
import '../scss/button.scss';

const Login = ({ useDispatchHook = useDispatch, formChange, error }) => {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(authenticate(email, password));
  };

  return (
    <div className='wrapper login-wrapper'>
      <div className='title-container'>
        <h1 className='title'>Войти</h1>
      </div>
      <form className='form login-form' onSubmit={handleSubmit(onSubmit)}>
        {error && <Alert className='form__block' banner message={error} type='error' showIcon />}
        <Input title='Email' name='email' type='email' register={register} />
        <Input title='Пароль' name='password' type='password' register={register} />
        <div className='form__block'>
          <p className='form__forgot-password'>Забыли пароль?</p>
        </div>
        <button data-testid='login' type='submit' className='form__button button'>Войти</button>
        <div className='form__switch'>
          <span className='form__to-title'>Новый пользователь? </span>
          <button className='form__to-button' onClick={formChange}>Регистрация</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  useDispatchHook: PropTypes.func,
  formChange: PropTypes.func,
  error: PropTypes.string
}

export default Login;
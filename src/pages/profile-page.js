import React, { Component } from 'react';
import Header from '../components/header';
import smallLogo from '../img/small-logo.svg';
import chip from '../img/chip.svg';
import circles from '../img/circles.svg';
import { pages } from '../constants';
import '../scss/form.scss';
import '../scss/card-layout.scss';

export default class Profile extends Component {
  state = {
    name: '',
    cardNumber: '',
    cardExpiryDate: '',
    cvc: '',
    isEdit: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveProfile = () => {
    this.setState({ isEdit: false });
  }

  goToMap = () => {
    this.props.setPage(pages.map.key);
  }

  render() {
    const { name, cardNumber, cardExpiryDate, cvc, isEdit } = this.state;

    return (
      <div className='page-container'>
        <Header setPage={this.props.setPage} page={pages.profile.key} />
        <div className='page-content'>
          <div className='container'>
            <div className={`wrapper ${isEdit ? 'edit-profile-wrapper' : 'gotomap-profile-wrapper'}`}>
              <h1 className='title'>Профиль</h1>
              <p className='subtitle'>
                {
                  isEdit
                    ? 'Введите платежные данные'
                    : 'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
                }
              </p>
              {
                isEdit
                  ? <form className='form profile-form'>
                    <div className='form__row'>
                      <div className='form__col'>
                        <div className='form__block'>
                          <div className='form__item-title'>Имя владельца</div>
                          <input type='text' className='form__input' name='name' value={name} onChange={this.handleChange} />
                        </div>
                        <div className='form__block'>
                          <div className='form__item-title'>Номер карты</div>
                          <input type='text' className='form__input' name='cardNumber' value={cardNumber} onChange={this.handleChange} />
                        </div>
                        <div className='form__row'>
                          <div className='form__col'>
                            <div className='form__block'>
                              <div className='form__item-title'>MM/YY</div>
                              <input type='text' className='form__input' name='cardExpiryDate' value={cardExpiryDate} onChange={this.handleChange} />
                            </div>
                          </div>
                          <div className='form__col'>
                            <div className='form__block'>
                              <div className='form__item-title'>CVC</div>
                              <input type='text' className='form__input' name='cvc' value={cvc} onChange={this.handleChange} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='form__col'>
                        <div className='card-layout'>
                          <div className='card-layout__header'>
                            <img className='card-layout__small-logo' alt='smallLogo' src={smallLogo} />
                            <div className='card-layout__card-expiry-date'>{cardExpiryDate}</div>
                          </div>
                          <div className='card-layout__content'>
                            <p>{cardNumber}</p>
                          </div>
                          <div className='card-layout__footer'>
                            <img className='card-layout__chip' alt='chip' src={chip} />
                            <img className='card-layout__circles' alt='circles' src={circles} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className='button' onClick={this.saveProfile}>Сохранить</button>
                  </form>
                  : <button className='button' onClick={this.goToMap}>Перейти на карту</button>
              }
            </div>
          </div>
        </div>
      </div>


    )
  }
}

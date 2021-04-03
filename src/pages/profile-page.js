import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCardData, getCardData } from '../store/actions/card';
import { getCardDataFromLocalStorage } from '../localstorage';
import Header from '../components/header';
import Input from '../components/input';
import smallLogo from '../img/small-logo.svg';
import chip from '../img/chip.svg';
import circles from '../img/circles.svg';
import { PAGES } from '../constants';
import '../scss/form.scss';
import '../scss/card-layout.scss';

class Profile extends Component {
  state = {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    isEdit: true
  };

  componentDidMount() {
    const localStorageData = getCardDataFromLocalStorage();

    this.setState({
      cardName: localStorageData.cardName,
      cardNumber: localStorageData.cardNumber,
      expiryDate: localStorageData.expiryDate,
      cvc: localStorageData.cvc,
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveProfile = (e) => {
    e.preventDefault();

    const { cardNumber, expiryDate, cardName, cvc } = e.target;

    this.props.setCardData(cardNumber.value, expiryDate.value, cardName.value, cvc.value, this.props.token);
    this.setState({ isEdit: false });
  }

  render() {
    const { cardName, cardNumber, expiryDate, cvc, isEdit } = this.state;

    return (
      <div className='page-container'>
        <Header page={PAGES.profile.key} />
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
                  ?
                  <form className='form profile-form' onSubmit={this.saveProfile}>
                    <div className='form__row'>
                      <div className='form__col'>
                        <Input title='Имя владельца' name='cardName' type='text' value={cardName} onChange={this.handleChange} />
                        <Input title='Номер карты' name='cardNumber' type='text' value={cardNumber} onChange={this.handleChange} />
                        <div className='form__row'>
                          <div className='form__col'>
                            <Input title='MM/YY' name='expiryDate' type='text' value={expiryDate} onChange={this.handleChange} />
                          </div>
                          <div className='form__col'>
                            <Input title='CVC' name='cvc' type='text' value={cvc} onChange={this.handleChange} />
                          </div>
                        </div>
                      </div>
                      <div className='form__col'>
                        <div className='card-layout'>
                          <div className='card-layout__header'>
                            <img className='card-layout__small-logo' alt='smallLogo' src={smallLogo} />
                            <div className='card-layout__card-expiry-date'>{expiryDate}</div>
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
                    <button className='button' type='submit'>Сохранить</button>
                  </form>
                  :
                  <Link className='button' to={PAGES.map.link}>Перейти на карту</Link>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    token: state.authorization.token
  }
}

export default connect(mapStateToProps, { setCardData, getCardData })(Profile);

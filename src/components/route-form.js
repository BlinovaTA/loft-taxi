import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from "classnames";
import Alert from 'antd/lib/alert';
import Select from 'react-select';
import Spin from 'antd/lib/spin';
import { getRoute } from '../store/actions/mapRoute';
import '../scss/route-form.scss';
import '../scss/select.scss';

class RouteForm extends Component {
  static propTypes = {
    addressList: PropTypes.array
  }

  state = {
    startAddress: '',
    endAddress: ''
  }

  startAddressChange = (e) => {
    const startAddress = e ? e.value : '';
    this.setState({ startAddress });
  }

  endAddressChange = (e) => {
    const endAddress = e ? e.value : '';
    this.setState({ endAddress });
  }

  sendOrder = (e) => {
    e.preventDefault();

    const { startAddress, endAddress } = this.state;

    this.props.getRoute(startAddress, endAddress);
  }

  render() {
    const { address, isPaymentData, routeError } = this.props;
    const { startAddress, endAddress } = this.state;

    const style = {
      control: base => ({
        ...base,
        border: 0,
        boxShadow: "none"
      })
    };

    const disabled = startAddress === '' || endAddress === '';

    return (
      <form className='route-form' onSubmit={this.sendOrder}>
        { address.isLoading ? <div className="route-form__no-data" data-testid="is-loading" ><Spin tip="Загрузка..." color={'#faad14'} /></div> :
          address.error ? <div className="route-form__no-data" data-testid="error" >{address.error}</div> :
            isPaymentData ?
              <>
                {routeError && <Alert className='route-form__alert' banner message={routeError} type='error' showIcon />}
                <div className='selects-wrapper'>
                  <div className='item-wrapper' data-testid="from">
                    <Select
                      className='select'
                      isClearable={true}
                      options={address.list.filter(item => item.value !== startAddress && item.value !== endAddress)}
                      placeholder='Откуда'
                      styles={style}
                      onChange={this.startAddressChange}
                    />
                  </div>
                  <div className='item-wrapper' data-testid="to">
                    <Select
                      className='select'
                      isClearable={true}
                      options={address.list.filter(item => item.value !== endAddress && item.value !== startAddress)}
                      placeholder='Куда'
                      styles={style}
                      onChange={this.endAddressChange}
                    />
                  </div>
                </div>
                <button
                  data-testid="order"
                  type='submit'
                  className={classNames('form__button', 'button', { 'button--disabled': disabled })}
                  disabled={disabled}
                >
                  Заказать
                </button>
              </>
              : <div className="route-form__no-data" data-testid="no-payment" >Для заказа введите платежные данные на странице <b>Профиль</b></div>}
      </form>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    address: state.address,
    isPaymentData: state.card.isPaymentData,
    routeError: state.mapRoute.error
  }
}

export default connect(mapStateToProps, { getRoute })(RouteForm)

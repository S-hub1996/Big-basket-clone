import { PaymentConfirm, PaymentOption } from './Action'
import { AddMoney } from './Action'

const initialState = {
  Balance: 0,
  PaymentOption: 'Card',
  AddMoney: 0,
  otp: false,
  address: [],
  changeAddress: false,
  deliveroption: false,
  payment: false,
}

export const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddMoney: {
      return {
        ...state,
        AddMoney: action.payload,
      }
    }
    case PaymentOption: {
      return {
        ...state,
        PaymentOption: action.payload,
      }
    }
    case PaymentConfirm: {
      var total = state.Balance + action.payload
      return {
        ...state,
        Balance: total,
        otp: false,
      }
    }
    case 'OtpVisible': {
      return {
        ...state,
        otp: action.payload,
      }
    }
    case 'addressAd': {
      console.log('add', action.payload)
      return {
        ...state,
        address: [action.payload],
      }
    }
    case 'change': {
      return {
        ...state,
        changeAddress: action.payload,
      }
    }
    case 'deliveryoption': {
      return {
        ...state,
        deliveryoption: action.payload,
      }
    }
    case 'payment': {
      return {
        ...state,
        payment: action.payload,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

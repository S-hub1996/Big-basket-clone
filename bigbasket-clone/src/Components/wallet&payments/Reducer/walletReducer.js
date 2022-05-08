import { PaymentConfirm, PaymentOption } from './Action'
import { AddMoney } from './Action'

const initialState = {
  Balance: 0,
  PaymentOption: 'Card',
  AddMoney: 0,
  otp: false,
}

export const WalletReducer = (state = initialState, action) => {
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
    case "useBalance": {
      return {
        ...state,
        Balance:state.Balance-action.payload
      }
    }
      
    default: {
      return {
        ...state,
      }
    }
  }
}

export const AddMoney = "addMoney";
export const PaymentOption = "PaymentOption";
export const PaymentConfirm = "PaymentConfirm";



//action types

export const Add = (prop) => {
    return {
        type: AddMoney,
        payload:prop
    }
    
}
export const Option = (prop) => {
    return {
        type: PaymentOption,
        payload:prop
    }
    
}
export const ConfirmAdd = (prop) => {
    return {
        type: PaymentConfirm,
        payload:prop
    }
}

export const OtpVisible = (prop) => {
    return {
        type: "OtpVisible",
        payload:prop
    }
}

export const AddressAd = (prop) => {
    return {
        type: "addAdress",
        payload:prop
    }
}
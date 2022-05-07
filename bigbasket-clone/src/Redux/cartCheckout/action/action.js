import { EMPTY_CART} from "./CartActionTypes"

export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}

export const emptyCart = () =>{
    return{
        type:EMPTY_CART,
        payload:{message:"emptying the cart"}
    }
}
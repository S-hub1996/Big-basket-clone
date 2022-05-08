import { EMPTY_CART} from "./CartActionTypes";

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

export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}

export const emptyCart = () =>{
    return{
        type:EMPTY_CART,
        payload:{message:"emptying the cart"}
    }
}
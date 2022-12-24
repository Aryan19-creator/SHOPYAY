import * as actionTypes from "../constants/cartConstants"

export const addToCart=()=>(dispatch)=>{//this fn will be passed to reducer fn. which will
    //actually change the state
    dispatch({
        type: actionTypes.ADD_TO_CART,
        someValue: 0,
    })
}
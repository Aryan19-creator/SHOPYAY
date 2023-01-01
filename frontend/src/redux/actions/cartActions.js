import * as actionTypes from "../constants/cartConstants"

export const addToCart=(productId, quantity)=>(dispatch)=>{//this fn will be passed to reducer fn. which will
    //actually change the state
    console.log(productId)
    console.log(quantity)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        someValue: 0,
    })
}
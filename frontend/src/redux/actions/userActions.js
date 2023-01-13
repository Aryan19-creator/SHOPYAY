import { LOGIN_USER, LOGOUT_USER } from "../constants/userConstants";
import axios from "axios";



export const setReduxUserState = (userCreated)=>(dispatch)=>{
    dispatch({
        type: LOGIN_USER,
        payload: userCreated
    })
}

export const logout=()=>(dispatch)=>{
    var url="/login";
    window.top.location=url;
    axios.get('/api/logout')
    localStorage.removeItem("userInfo")
    sessionStorage.removeItem("userInfo")
    localStorage.removeItem("cart")
    dispatch({type: LOGOUT_USER})

}
 
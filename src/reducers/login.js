import { SET_CURRENT_USER } from "../constants"

const initialState = {
    isAuthenticated:false,
    user:{}
}

const auth = (state = initialState,action) =>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                isAuthenticated:true,
                user:action.user
            }
        default:
            return state;
    }
}

export default auth;
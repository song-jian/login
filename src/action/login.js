import { SET_CURRENT_USER } from "../constants"

import jwtDecode from "jwt-decode"

const jumpPage = () => {
    // 判断重定向
    let redirectUrl = getQuerystring('redirect_url');
    if (redirectUrl) {
        window.location.href = redirectUrl;
    } else {
        window.location.hash = "#/home";
        window.location.reload();
    }
}

const getQuerystring = (name) => {
    let url = window.location.href;
    let path = url.split(name+'=')[1]
    return path
    
}


export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

// export const logout = () =>{
//     return dispatch => {
//         localStorage.removeItem("jwtToken");
//         // 取消请求头中的信息
//         setAuthorizationToken(false);
//         // 清除掉redux中的数据
//         dispatch(setCurrentUser({}))
//     }
// }

export const login = (token) => {
    return dispatch => {
        localStorage.setItem('jwtToken', token);
        jumpPage()
        dispatch(setCurrentUser(jwtDecode(token)))
    }
}
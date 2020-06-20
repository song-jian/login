import axios from 'axios';

const setParam = (param) => {
    return param
}
const setQuery = (query) => {
    return query
}

const server = (url, method, params) => {
    let type = method.toUpperCase();
    let param = {};
    let query = {};
    if (type == "GET") {
        query = setQuery(params)
    } else {
        param = setParam(params)
    }


    return new Promise((resolve, reject) => {
        axios({
            url,
            method: type,
            headers: {
                acceesstoken: "token",
                'Content-Type': 'application/json',
            },
            params: query,
            data: type === 'GET' ? null : param

        }).then(res => {
            if (isSuccess(res)) {
                resolve(res.data.result);
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err.data)
        })
    })
}

const isSuccess = (res) => {
    return res && res.data && res.data.code === 0
}

export default server 
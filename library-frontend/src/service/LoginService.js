import http from './http-common'


const postLogin = (loginData) => {
    return http.post(`/api/library/login`, loginData)
}



const LoginService = {
    postLogin,
}

export default LoginService
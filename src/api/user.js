import request from '@/utils/request'

export function login(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/auth/login',
        method: 'post',
        data: {
            'name': data.username,
            'password': data.password
        }
    })
}

export function getInfo(token) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/auth/me',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/user/logout',
        method: 'post'
    })
}

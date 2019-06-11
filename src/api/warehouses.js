import request from '@/utils/request'

export function fetchList(queryItem) {
    let url = process.env.VUE_APP_BACKEND_PREFIX + '/warehouses?perPage=' + queryItem.perPage
    url += '&page=' + queryItem.currentPage + '&queryString=' + queryItem.queryString

    return request({
        url: url,
        method: 'get'
    })
}

export function fetchOne(id) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/warehouses/' + id,
        method: 'get'
    })
}

export function create(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/warehouses',
        method: 'post',
        data: {
            'code': data.code,
            'name': data.name,
            'comment': data.comment
        }
    })
}

export function update(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/warehouses/' + data.id,
        method: 'put',
        data: {
            'code': data.code,
            'name': data.name,
            'comment': data.comment
        }
    })
}

export function destroy(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/warehouses/' + data.id,
        method: 'delete'
    })
}

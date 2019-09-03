import request from '@/utils/request'

export function fetchList(queryItem) {
    let url = process.env.VUE_APP_BACKEND_PREFIX + '/suppliers?perPage=' + queryItem.perPage
    url += '&page=' + queryItem.currentPage + '&queryString=' + queryItem.queryString
    if (queryItem.typeId) {
        url += '&supplierTypeId=' + queryItem.typeId
    }

    return request({
        url: url,
        method: 'get'
    })
}

export function fetchOne(id) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/suppliers/' + id,
        method: 'get'
    })
}

export function create(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/suppliers',
        method: 'post',
        data: {
            'name': data.name,
            'phone': data.phone,
            'address': data.address,
            'website': data.website,
            'facebook': data.facebook,
            'note': data.note,
            'supplier_type_id': data.supplierTypeId
        }
    })
}

export function update(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/suppliers/' + data.id,
        method: 'put',
        data: {
            'name': data.name,
            'phone': data.phone,
            'address': data.address,
            'website': data.website,
            'facebook': data.facebook,
            'note': data.note,
            'supplier_type_id': data.supplierTypeId
        }
    })
}

export function destroy(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/suppliers/' + data.id,
        method: 'delete'
    })
}

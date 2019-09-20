import request from '@/utils/request'

export function fetchList(queryItem) {
    let url = process.env.VUE_APP_BACKEND_PREFIX + '/purchase-orders?perPage=' + queryItem.perPage
    url += '&page=' + queryItem.currentPage + '&queryString=' + queryItem.queryString

    return request({
        url: url,
        method: 'get'
    })
}

export function fetchOne(id) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/purchase-orders/' + id,
        method: 'get'
    })
}

export function create(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/purchase-orders',
        method: 'post',
        data: {
            supplier_id: data.supplier_id,
            tax_type: data.tax_type,
            employee_id: data.employee_id,
            note: data.note,
            details: data.details.map((detail) => {
                return {
                    item_id: detail.item_id,
                    quantity: detail.quantity,
                    price: detail.price,
                    price_rate: detail.price_rate,
                    note: detail.note
                }
            })
        }
    })
}

export function update(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/purchase-orders/' + data.id,
        method: 'put',
        data: {
            supplier_id: data.supplier_id,
            tax_type: data.tax_type,
            employee_id: data.employee_id,
            note: data.note,
            details: data.details.map((detail) => {
                return {
                    item_id: detail.item_id,
                    quantity: detail.quantity,
                    price: detail.price,
                    price_rate: detail.price_rate,
                    note: detail.note
                }
            })
        }
    })
}

export function destroy(data) {
    return request({
        url: process.env.VUE_APP_BACKEND_PREFIX + '/purchase-orders/' + data.id,
        method: 'delete'
    })
}

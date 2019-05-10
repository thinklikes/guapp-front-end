import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/stock-manager/item_types',
    method: 'get'
  })
}

export function createItemType(data) {
  return request({
    url: '/stock-manager/item_types',
    method: 'post',
    data: {
      'id': data.id,
      'parent_id': data.parent_id,
      'name': data.label
    }
  })
}

export function updateItemType(data) {
  return request({
    url: '/stock-manager/item_types' + '/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function removeItemType(data) {
  return request({
    url: '/stock-manager/item_types' + '/' + data.id,
    method: 'delete'
  })
}

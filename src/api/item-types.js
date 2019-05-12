import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/stock-manager/item-types',
    method: 'get'
  })
}

export function createItemType(data) {
  return request({
    url: '/stock-manager/item-types',
    method: 'post',
    data: {
      'id': data.id,
      'parent_id': data.parent_id,
      'name': data.label
    }
  })
}

export function updateItemTypeName(data) {
  return request({
    url: '/stock-manager/item-types/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function updateItemTypePriority(data, parent_id) {
  return request({
    url: '/stock-manager/item-types/update-priority/' + data.id,
    method: 'put',
    data: {
      'name': data.label,
      'parent_id': parent_id
    }
  })
}

export function removeItemType(data) {
  return request({
    url: '/stock-manager/item-types/' + data.id,
    method: 'delete'
  })
}

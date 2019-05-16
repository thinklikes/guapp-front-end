import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/guapp/item-types',
    method: 'get'
  })
}

export function createItemType(data) {
  return request({
    url: '/guapp/item-types',
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
    url: '/guapp/item-types/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function updateItemTypePriority(data, parent_id, children) {
  return request({
    url: '/guapp/item-types/update-priority/' + data.id,
    method: 'put',
    data: {
      'name': data.label,
      'parent_id': parent_id,
      'children': children
    }
  })
}

export function removeItemType(data) {
  return request({
    url: '/guapp/item-types/' + data.id,
    method: 'delete'
  })
}

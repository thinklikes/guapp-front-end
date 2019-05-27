import request from '@/utils/request'

export function fetchList() {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-types',
    method: 'get'
  })
}

export function create(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-types',
    method: 'post',
    data: {
      'id': data.id,
      'parent_id': data.parent_id,
      'name': data.label
    }
  })
}

export function update(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-types/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function updatePriority(data, parent_id, children) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-types/update-priority/' + data.id,
    method: 'put',
    data: {
      'name': data.label,
      'parent_id': parent_id,
      'children': children
    }
  })
}

export function destroy(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-types/' + data.id,
    method: 'delete'
  })
}

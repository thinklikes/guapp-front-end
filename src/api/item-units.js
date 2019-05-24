import request from '@/utils/request'

export function fetchList() {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-units',
    method: 'get'
  })
}

export function create(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-units',
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
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-units/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function destroy(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/item-units/' + data.id,
    method: 'delete'
  })
}

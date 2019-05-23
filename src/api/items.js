import request from '@/utils/request'

export function fetchList(page = 0) {
  return request({
    url: '/guapp/items/' + (page === 0 ? '' : '?page=' + page),
    method: 'get'
  })
}

export function fetchOne(id) {
  return request({
    url: '/guapp/items/' + id,
    method: 'get'
  })
}

export function create(data) {
  return request({
    url: '/guapp/items',
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
    url: '/guapp/items/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function destroy(data) {
  return request({
    url: '/guapp/items/' + data.id,
    method: 'delete'
  })
}

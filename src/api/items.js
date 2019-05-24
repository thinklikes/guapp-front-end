import request from '@/utils/request'

export function fetchList(page = 1, perPage = 50, queryString = '') {
  const url = '/guapp/items?perPage=' + perPage + '&page=' + page + '&queryString=' + queryString
  return request({
    url: url,
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

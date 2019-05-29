import request from '@/utils/request'

export function fetchList(queryItem) {
  let url = process.env.VUE_APP_BACKEND_PREFIX + '/items?perPage=' + queryItem.perPage
  url += '&page=' + queryItem.currentPage + '&queryString=' + queryItem.queryString
  if (queryItem.typeId) {
    url += '&itemTypeId=' + queryItem.typeId
  }

  return request({
    url: url,
    method: 'get'
  })
}

export function fetchOne(id) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/items/' + id,
    method: 'get'
  })
}

export function create(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/items',
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
    url: process.env.VUE_APP_BACKEND_PREFIX + '/items/' + data.id,
    method: 'put',
    data: {
      'name': data.label
    }
  })
}

export function destroy(data) {
  return request({
    url: process.env.VUE_APP_BACKEND_PREFIX + '/items/' + data.id,
    method: 'delete'
  })
}

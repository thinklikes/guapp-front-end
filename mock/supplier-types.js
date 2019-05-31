const url = '/supplier-types'

const contents = [
  {
    'id': 1,
    'label': '美甲廠商'
  },
  {
    'id': 2,
    'label': '教學機構'
  },
  {
    'id': 3,
    'label': '團購'
  },
  {
    'id': 4,
    'label': '雜貨'
  },
  {
    'id': 5,
    'label': '場地'
  },
  {
    'id': 6,
    'label': '其他'
  }
]

export default [
  {
    url: url,
    type: 'get',
    response: config => {
      return {
        code: 20000,
        contents: contents,
        message: ''
      }
    }
  },
  {
    url: url,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        contents: {
          id: parseInt(Math.random() * 100)
        },
        message: ''
      }
    }
  },
  {
    url: url + '/[0-9]+',
    type: 'put',
    response: config => {
      return {
        code: 20000,
        contents: [],
        message: ''
      }
    }
  },
  {
    url: url + '/[0-9]+',
    type: 'delete',
    response: config => {
      return {
        code: 20000,
        contents: [],
        message: ''
      }
    }
  }

]


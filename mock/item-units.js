const url = '/item-units'

const contents = [
  {
    'id': 1,
    'label': '式'
  },
  {
    'id': 2,
    'label': '罐'
  },
  {
    'id': 3,
    'label': '瓶'
  },
  {
    'id': 4,
    'label': '個'
  },
  {
    'id': 5,
    'label': '隻'
  },
  {
    'id': 6,
    'label': '張'
  },
  {
    'id': 7,
    'label': '份'
  },
  {
    'id': 8,
    'label': '組'
  },
  {
    'id': 9,
    'label': '盒'
  },
  {
    'id': 10,
    'label': '條'
  },
  {
    'id': 11,
    'label': '包'
  },
  {
    'id': 12,
    'label': '卷'
  },
  {
    'id': 13,
    'label': '台'
  },
  {
    'id': 14,
    'label': '件'
  },
  {
    'id': 15,
    'label': '本'
  },
  {
    'id': 16,
    'label': '桶'
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


const url = '/warehouses'

const contents = {
    'current_page': 1,
    'data': [
        {
            'id': 1,
            'code': 'W0001',
            'name': '現場倉',
            'comment': '現場作業區的存放區'
        },
        {
            'id': 2,
            'code': 'W0002',
            'name': '美甲倉庫',
            'comment': '存放未開封用品的區域'
        }
    ],
    'first_page_url': 'http://guapp.test/api/warehouses?page=1',
    'from': 1,
    'last_page': 1,
    'last_page_url': 'http://guapp.test/api/warehouses?page=10',
    'next_page_url': 'http://guapp.test/api/warehouses?page=2',
    'path': 'http://guapp.test/api/warehouses',
    'per_page': '100',
    'prev_page_url': null,
    'to': 22,
    'total': 100
}

export default [
    {
        url: url + '/[0-9]+',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                contents: contents.data[0],
                message: ''
            }
        }
    },
    {
        url: url,
        type: 'get',
        response: () => {
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
        response: () => {
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
        response: () => {
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
        response: () => {
            return {
                code: 20000,
                contents: [],
                message: ''
            }
        }
    }

]


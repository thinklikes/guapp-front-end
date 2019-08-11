const url = '/item-types'

const contents = [
    {
        'id': 1,
        'parent_id': 0,
        'level': 1,
        'label': '進修',
        'children': null
    },
    {
        'id': 2,
        'parent_id': 0,
        'level': 1,
        'label': '凝膠指甲',
        'children': [
            {
                'id': 3,
                'parent_id': 2,
                'level': 2,
                'label': '功能膠',
                'children': [
                    {
                        'id': 4,
                        'parent_id': 3,
                        'level': 3,
                        'label': '底層膠'
                    },
                    {
                        'id': 5,
                        'parent_id': 3,
                        'level': 3,
                        'label': '上層膠'
                    },
                    {
                        'id': 6,
                        'parent_id': 3,
                        'level': 3,
                        'label': '建構/延甲膠'
                    },
                    {
                        'id': 7,
                        'parent_id': 3,
                        'level': 3,
                        'label': '調合膠'
                    }
                ]
            },
            {
                'id': 8,
                'parent_id': 2,
                'level': 2,
                'label': '色膠',
                'children': [
                    {
                        'id': 9,
                        'parent_id': 8,
                        'level': 3,
                        'label': '彩色凝膠（罐裝）'
                    },
                    {
                        'id': 10,
                        'parent_id': 8,
                        'level': 3,
                        'label': '彩色甲油膠'
                    },
                    {
                        'id': 11,
                        'parent_id': 8,
                        'level': 3,
                        'label': '彩繪凝膠'
                    }
                ]
            },
            {
                'id': 12,
                'parent_id': 2,
                'level': 2,
                'label': '凝膠套組',
                'children': null
            },
            {
                'id': 13,
                'parent_id': 2,
                'level': 2,
                'label': '3D粉雕',
                'children': null
            },
            {
                'id': 14,
                'parent_id': 2,
                'level': 2,
                'label': '手工藝用凝膠',
                'children': null
            }
        ]
    },
    {
        'id': 15,
        'parent_id': 0,
        'level': 1,
        'label': '水晶指甲',
        'children': [
            {
                'id': 16,
                'parent_id': 15,
                'level': 2,
                'label': '水晶粉',
                'children': null
            },
            {
                'id': 17,
                'parent_id': 15,
                'level': 2,
                'label': '粉雕粉',
                'children': null
            }
        ]
    }
]

export default [
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
        url: url + '/update-priority/[0-9]+',
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


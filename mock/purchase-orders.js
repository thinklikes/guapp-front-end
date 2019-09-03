const url = '/purchase-orders'

const contents = {
    'current_page': 1,
    'data': [
        {
            'id': 1,
            'code': '20190613001',
            'supplier_id': 21,
            'receiving_date': '2018-05-24',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 21,
                'name': '高雄市美容業職業工會'
            }
        },
        {
            'id': 2,
            'code': '20190613002',
            'supplier_id': 20,
            'receiving_date': '2018-07-07',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 20,
                'name': 'Muxin Nail Art Center 慕昕美甲藝術中心'
            }
        },
        {
            'id': 3,
            'code': '20190613003',
            'supplier_id': 9,
            'receiving_date': '2018-07-31',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 9,
                'name': '米蘿美甲美睫'
            }
        },
        {
            'id': 4,
            'code': '20190613004',
            'supplier_id': 34,
            'receiving_date': '2018-08-11',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 34,
                'name': '光南大批發'
            }
        },
        {
            'id': 5,
            'code': '20190613005',
            'supplier_id': 9,
            'receiving_date': '2018-08-14',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 9,
                'name': '米蘿美甲美睫'
            }
        },
        {
            'id': 6,
            'code': '20190613006',
            'supplier_id': 35,
            'receiving_date': '2018-08-17',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 35,
                'name': '宜得利'
            }
        },
        {
            'id': 7,
            'code': '20190613007',
            'supplier_id': 37,
            'receiving_date': '2018-08-17',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 37,
                'name': '博客來'
            }
        },
        {
            'id': 8,
            'code': '20190613008',
            'supplier_id': 32,
            'receiving_date': '2018-09-01',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 32,
                'name': '大創'
            }
        },
        {
            'id': 9,
            'code': '20190613009',
            'supplier_id': 29,
            'receiving_date': '2018-09-04',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 29,
                'name': '高賓瓶瓶罐罐'
            }
        },
        {
            'id': 10,
            'code': '20190613010',
            'supplier_id': 23,
            'receiving_date': '2018-09-07',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 23,
                'name': '婉綸團購'
            }
        },
        {
            'id': 11,
            'code': '20190613011',
            'supplier_id': 36,
            'receiving_date': '2018-09-16',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 36,
                'name': 'IKEA'
            }
        },
        {
            'id': 12,
            'code': '20190613012',
            'supplier_id': 29,
            'receiving_date': '2018-09-17',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 29,
                'name': '高賓瓶瓶罐罐'
            }
        },
        {
            'id': 13,
            'code': '20190613013',
            'supplier_id': 33,
            'receiving_date': '2018-09-19',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 33,
                'name': '寶雅'
            }
        },
        {
            'id': 14,
            'code': '20190613014',
            'supplier_id': 9,
            'receiving_date': '2018-09-21',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 9,
                'name': '米蘿美甲美睫'
            }
        },
        {
            'id': 15,
            'code': '20190613015',
            'supplier_id': 31,
            'receiving_date': '2018-09-22',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 31,
                'name': '杏醫醫療用品'
            }
        },
        {
            'id': 16,
            'code': '20190613016',
            'supplier_id': 38,
            'receiving_date': '2018-09-25',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 38,
                'name': '巨蛋設計家'
            }
        },
        {
            'id': 17,
            'code': '20190613017',
            'supplier_id': 47,
            'receiving_date': '2018-09-27',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 47,
                'name': '圈圈愛漂亮'
            }
        },
        {
            'id': 18,
            'code': '20190613018',
            'supplier_id': 32,
            'receiving_date': '2018-09-28',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 32,
                'name': '大創'
            }
        },
        {
            'id': 19,
            'code': '20190613019',
            'supplier_id': 33,
            'receiving_date': '2018-09-28',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 33,
                'name': '寶雅'
            }
        },
        {
            'id': 20,
            'code': '20190613020',
            'supplier_id': 2,
            'receiving_date': '2018-09-30',
            'created_at': '2019-08-28 15:22:54',
            'updated_at': '2019-08-28 15:22:54',
            'supplier': {
                'id': 2,
                'name': '泰特國際股份有限公司 (TAT)'
            }
        }
    ],
    'first_page_url': 'http://guapp.test/api/purchase-orders?page=1',
    'from': 1,
    'last_page': 1,
    'last_page_url': 'http://guapp.test/api/purchase-orders?page=1',
    'next_page_url': null,
    'path': 'http://guapp.test/api/purchase-orders',
    'per_page': 100,
    'prev_page_url': null,
    'to': 20,
    'total': 20
}

export default [
    {
        url: url + '/[0-9]+',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                contents: {
                    'id': 1,
                    'code': '20190613001',
                    'receiving_date': '2018-05-24',
                    'employee_id': 1,
                    'supplier_id': 21,
                    'tax_type': '2',
                    'note': '',
                    'created_at': '2019-08-28 07:42:31',
                    'updated_at': '2019-08-28 07:42:31',
                    'deleted_at': null,
                    'supplier': {
                        'id': 21,
                        'name': '高雄市美容業職業工會'
                    },
                    'purchase_order_items': [
                        {
                            'id': 1,
                            'order_id': 1,
                            'item_id': 6,
                            'quantity': '1.00',
                            'price': '3500.00',
                            'price_rate': '1.00',
                            'note': '美甲凝膠粉雕實作班',
                            'item': {
                                'id': 6,
                                'name': '其他進修'
                            }
                        }
                    ]
                },
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


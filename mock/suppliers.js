const url = '/suppliers'

const contents = {
  'current_page': 1,
  'data': [
    {
      'id': 1,
      'name': '台灣娜拉波股份有限公司 (Nail Labo)',
      'facebook': 'https://www.facebook.com/NailLaboTaiwan/',
      'website': 'https://www.naillabotw.com',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 2,
      'name': '泰特國際股份有限公司 (TAT)',
      'facebook': 'https://www.facebook.com/tattaiwan/',
      'website': 'http://tat-taiwan.com.tw/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 3,
      'name': '璐意雅時尚顧問有限公司 (RUYIYA)',
      'facebook': 'https://zh-tw.facebook.com/ruyigel/',
      'website': 'https://www.shop2000.com.tw/RUYIYA/home',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 4,
      'name': '鑫儷 (Shenly)',
      'facebook': 'https://www.facebook.com/Shenly.com.tw/',
      'website': 'https://shenly.shop2000.com.tw/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 5,
      'name': '大森美甲 (Dawson nail)',
      'facebook': 'https://zh-tw.facebook.com/dawsonnail/',
      'website': 'http://www.dawson-nail.com.tw/shop.php',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 6,
      'name': '晶采暢貨中心',
      'facebook': 'https://www.facebook.com/nailcrystal.materials',
      'website': 'https://www.nailshoptw.com/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 7,
      'name': 'OMD美甲 日本專業品牌-台灣院校',
      'facebook': 'https://www.facebook.com/NQeyenails/',
      'website': 'http://nqeyeshow.com/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 8,
      'name': '康盟國際有限公司',
      'facebook': 'https://zh-tw.facebook.com/hcnails.taiwan/',
      'website': 'https://www.hcnails.com/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 9,
      'name': '米蘿美甲美睫',
      'facebook': 'https://www.facebook.com/miro.nail.tw?ref=hl',
      'website': 'http://www.cuccio.com.tw/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 10,
      'name': 'Cosplus 光妍指彩 (Julia UV Nail)',
      'facebook': 'https://www.facebook.com/Juliauvnail/',
      'website': 'http://www.juliauvnail.com/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 11,
      'name': 'S+ NAIL',
      'facebook': 'https://www.facebook.com/S.Plus.taiwan/',
      'website': 'http://www.ccartnail.com/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 12,
      'name': '心緹 (Ostar)',
      'facebook': 'https://www.facebook.com/OstarNails.Taiwan/',
      'website': 'http://www.ostar-nails.com/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 13,
      'name': 'ONS (Odyssey Nail Systems)',
      'facebook': 'https://zh-tw.facebook.com/TaiwanONS/',
      'website': 'https://www.onsnail.com.tw/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 14,
      'name': '晶彩殿堂',
      'facebook': 'https://zh-tw.facebook.com/Naticegel/',
      'website': 'https://www.shop2000.com.tw/3388776/',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 15,
      'name': 'VIKEI NAIL 美甲暢貨中心',
      'facebook': 'https://zh-tw.facebook.com/VIKEINAIL/',
      'website': 'http://www.vikeinail.com.tw/vikeinail/default.aspx',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 16,
      'name': '阿柴店長',
      'facebook': '',
      'website': 'https://shopee.tw/nailabcde',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 17,
      'name': 'Nail Mall 네일몰',
      'facebook': '',
      'website': '',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 18,
      'name': '百康科技 SPA 椅美甲桌 (齡群科技有限公司)',
      'facebook': 'https://www.facebook.com/315238758579050/',
      'website': '',
      'supplier_type_id': 1,
      'supplier_type': {
        'id': 1,
        'name': '美甲廠商'
      }
    },
    {
      'id': 19,
      'name': '娜拉波技藝短期補習班',
      'facebook': 'https://www.facebook.com/naillabotaiwanschool/',
      'website': 'https://www.naillabotw.com/',
      'supplier_type_id': 2,
      'supplier_type': {
        'id': 2,
        'name': '教學機構'
      }
    },
    {
      'id': 20,
      'name': 'Muxin Nail Art Center 慕昕美甲藝術中心',
      'facebook': 'https://zh-tw.facebook.com/muxin.nail/',
      'website': 'https://www.instagram.com/muxin.nail/',
      'supplier_type_id': 2,
      'supplier_type': {
        'id': 2,
        'name': '教學機構'
      }
    },
    {
      'id': 21,
      'name': '高雄市美容業職業工會',
      'facebook': 'https://www.facebook.com/GaoXiongShiMeiRongYeZhiYeGongHui',
      'website': 'http://www.bak.org.tw/index.php/',
      'supplier_type_id': 2,
      'supplier_type': {
        'id': 2,
        'name': '教學機構'
      }
    },
    {
      'id': 22,
      'name': 'MIROOM',
      'facebook': '',
      'website': 'https://miroom.in/',
      'supplier_type_id': 2,
      'supplier_type': {
        'id': 2,
        'name': '教學機構'
      }
    }
  ],
  'first_page_url': 'http://guapp.test/api/suppliers?page=1',
  'from': 1,
  'last_page': 1,
  'last_page_url': 'http://guapp.test/api/suppliers?page=10',
  'next_page_url': 'http://guapp.test/api/suppliers?page=2',
  'path': 'http://guapp.test/api/suppliers',
  'per_page': '100',
  'prev_page_url': null,
  'to': 22,
  'total': 100
}

export default [
  {
    url: url + '/[0-9]+',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        'contents': {
          'id': 1,
          'name': '台灣娜拉波股份有限公司 (Nail Labo)',
          'phone': '02-27789703',
          'address': '台北市忠孝東路4段155號5樓之2',
          'website': 'https://www.naillabotw.com',
          'facebook': 'https://www.facebook.com/NailLaboTaiwan/',
          'note': '週一至週六  10:00~19:00',
          'supplier_type_id': 1,
          'created_at': null,
          'updated_at': null,
          'deleted_at': null,
          'supplier_type': {
            'id': 1,
            'name': '美甲廠商'
          }
        },
        message: ''
      }
    }
  },
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


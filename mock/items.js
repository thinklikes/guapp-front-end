const url = '/items'

const contents = {
  'current_page': 1,
  'data': [
    {
      'id': 3,
      'name': '藝術進修',
      'item_type_id': '1',
      'item_type': {
        'id': 1,
        'name': '進修'
      }
    },
    {
      'id': 4,
      'name': '水晶進修',
      'item_type_id': '1',
      'item_type': {
        'id': 1,
        'name': '進修'
      }
    },
    {
      'id': 5,
      'name': '檢定進修',
      'item_type_id': '1',
      'item_type': {
        'id': 1,
        'name': '進修'
      }
    },
    {
      'id': 6,
      'name': '其他進修',
      'item_type_id': '1',
      'item_type': {
        'id': 1,
        'name': '進修'
      }
    },
    {
      'id': 7,
      'name': '運費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 8,
      'name': '店到店運費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 9,
      'name': '雜費/面交費/包材費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 10,
      'name': '轉帳手續費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 11,
      'name': '場地費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 12,
      'name': '交通費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 13,
      'name': '檢定費/考試費',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 14,
      'name': 'LINE 現金抵用卷',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 15,
      'name': '折扣',
      'item_type_id': '510',
      'item_type': {
        'id': 510,
        'name': '雜支'
      }
    },
    {
      'id': 16,
      'name': 'Ruyi Gel - 001 柔白色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 17,
      'name': 'Ruyi Gel - 002 黑色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 18,
      'name': 'Ruyi Gel - 037 彩繪白 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 19,
      'name': 'Ruyi Gel - 038 琉璃紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 20,
      'name': 'Ruyi Gel - 039 透明黃 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 21,
      'name': 'Ruyi Gel - 040 琉璃綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 22,
      'name': 'Ruyi Gel - 041 彩繪黑 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 23,
      'name': 'Ruyi Gel - 043 超超人氣拉線銀 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 24,
      'name': 'Ruyi Gel - 044 超超人氣拉金線膠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 25,
      'name': 'Ruyi Gel - 045 可可深咖啡 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 26,
      'name': 'Ruyi Gel - 046 氣質深灰 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 27,
      'name': 'Ruyi Gel - 047 蒂芬妮藍 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 28,
      'name': 'Ruyi Gel - 049 深珠光咖啡酒 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 29,
      'name': 'Ruyi Gel - 050 超氣質金光膚色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 30,
      'name': 'Ruyi Gel - 051 夢幻薰衣草紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 31,
      'name': 'Ruyi Gel - 052 土耳其藍 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 32,
      'name': 'Ruyi Gel - 054 美人魚透亮粉紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 33,
      'name': 'Ruyi Gel - 055 氣質透藕灰 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 34,
      'name': 'Ruyi Gel - 056 古銅金 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 35,
      'name': 'Ruyi Gel - 058 透氣質裸粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 36,
      'name': 'Ruyi Gel - 059 氣質芋紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 37,
      'name': 'Ruyi Gel - 060 氣質藕粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 38,
      'name': 'Ruyi Gel - 061 超好看珠光深藍 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 39,
      'name': 'Ruyi Gel - 062 宇宙亮片紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 40,
      'name': 'Ruyi Gel - 064 美人魚透粉紅亮片 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 41,
      'name': 'Ruyi Gel - 065 美人魚透淺藍亮片 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 42,
      'name': 'Ruyi Gel - 068 變色龍青 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 43,
      'name': 'Ruyi Gel - 070 氣質正灰 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 44,
      'name': 'Ruyi Gel - 072 超可愛顯白桃 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 45,
      'name': 'Ruyi Gel - 073 女神系藕紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 46,
      'name': 'Ruyi Gel - 074 琉璃紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 47,
      'name': 'Ruyi Gel - 077 女神系藕紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 48,
      'name': 'Ruyi Gel - 079 潔淨珠光白 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 49,
      'name': 'Ruyi Gel - 080 夜空珠光黑 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 50,
      'name': 'Ruyi Gel - 081 香檳粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 51,
      'name': 'Ruyi Gel - 082 夜空珠光灰 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 52,
      'name': 'Ruyi Gel - 083 富麗珠光金 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 53,
      'name': 'Ruyi Gel - 087 珠光葡萄酒紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 54,
      'name': 'Ruyi Gel - 088 透明螢光粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 55,
      'name': 'Ruyi Gel - 089 透明焦糖色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 56,
      'name': 'Ruyi Gel - 090 透明可可色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 57,
      'name': 'Ruyi Gel - 091 貴氣咖啡紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 58,
      'name': 'Ruyi Gel - 092 莓紅色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 59,
      'name': 'Ruyi Gel - 093 玫瑰色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 60,
      'name': 'Ruyi Gel - 094 灰蛋白 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 61,
      'name': 'Ruyi Gel - 095 黃金芥茉 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 62,
      'name': 'Ruyi Gel - 096 珠光勃地根酒紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 63,
      'name': 'Ruyi Gel - 097 時尚綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 64,
      'name': 'Ruyi Gel - 101 正紅色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 65,
      'name': 'Ruyi Gel - 102 正紫色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 66,
      'name': 'Ruyi Gel - 103 正橘色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 67,
      'name': 'Ruyi Gel - 104 正黃色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 68,
      'name': 'Ruyi Gel - 105 細亮膚粉 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 69,
      'name': 'Ruyi Gel - 106 珠光蒂芬妮藍綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 70,
      'name': 'Ruyi Gel - 107 正咖啡色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 71,
      'name': 'Ruyi Gel - 108 深膚紅色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 72,
      'name': 'Ruyi Gel - 109 深奶茶灰 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 73,
      'name': 'Ruyi Gel - 110 桃紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 74,
      'name': 'Ruyi Gel - 111 珊瑚粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 75,
      'name': 'Ruyi Gel - 112 電光藍 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 76,
      'name': 'Ruyi Gel - 113 螢光黃 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 77,
      'name': 'Ruyi Gel - 114 綠色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 78,
      'name': 'Ruyi Gel - 115 粉膚色 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 79,
      'name': 'Ruyi Gel - 116 白金拉線膠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 80,
      'name': 'Ruyi Gel - 117 螢光桃紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 81,
      'name': 'Ruyi Gel - 118 馬卡龍綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 82,
      'name': 'Ruyi Gel - 119 馬卡龍藍 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 83,
      'name': 'Ruyi Gel - 120 馬卡龍粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 84,
      'name': 'Ruyi Gel - 121 馬卡龍粉紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 85,
      'name': 'Ruyi Gel - 122 馬卡龍粉綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 86,
      'name': 'Ruyi Gel - 123 深金線膠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 87,
      'name': 'Ruyi Gel - 124 宇宙深藍拉線膠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 88,
      'name': 'Ruyi Gel - 125 透明藍 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 89,
      'name': 'Ruyi Gel - 126 飽和深粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 90,
      'name': 'Ruyi Gel - 127 芥末黃 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 91,
      'name': 'Ruyi Gel - 128 飽和膚 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 92,
      'name': 'Ruyi Gel - 129 細亮片透深粉紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 93,
      'name': 'Ruyi Gel - 130 強推氣質裸 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 94,
      'name': 'Ruyi Gel - 131 珠光粉膚 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 95,
      'name': 'Ruyi Gel - 132 超人氣珠光墨綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 96,
      'name': 'Ruyi Gel - 133 超人氣博根地酒紅 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 97,
      'name': 'Ruyi Gel - 134 超人氣深紫 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 98,
      'name': 'Ruyi Gel - 135 螢光綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 99,
      'name': 'Ruyi Gel - 136 螢光橘 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
    {
      'id': 100,
      'name': 'Ruyi Gel - 137 灰橄㰖綠 5ml',
      'item_type_id': '9',
      'item_type': {
        'id': 9,
        'name': '彩色凝膠（罐裝）'
      }
    },
  ],
  'first_page_url': 'http://guapp.test/api/items?page=1',
  'from': 1,
  'last_page': 1,
  'last_page_url': 'http://guapp.test/api/items?page=10',
  'next_page_url': 'http://guapp.test/api/items?page=2',
  'path': 'http://guapp.test/api/items',
  'per_page': '100',
  'prev_page_url': null,
  'to': 100,
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
          'id': 17,
          'code': '',
          'name': 'testing....',
          'item_type_id': '9',
          'item_unit_id': '2',
          'note': null,
          'buying_prize': null,
          'selling_prize': null,
          'created_at': null,
          'updated_at': null,
          'deleted_at': null,
          'item_type': {
            'id': 9,
            'name': '彩色凝膠（罐裝）'
          },
          'item_unit': {
            'id': 2,
            'name': '罐'
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


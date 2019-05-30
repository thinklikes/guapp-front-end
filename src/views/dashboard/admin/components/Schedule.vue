<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="列表顯示" name="first">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%"
        >
            <el-table-column
                prop="date"
                label="日期"
                min-width="65"
            />
            <el-table-column
                prop="time"
                label="時間"
                min-width="65"
            />
            <el-table-column
                prop="name"
                label="稱謂"
                min-width="180"
            />
            <el-table-column
                prop="subject"
                label="預約項目"
                min-width="125"
            />
            <el-table-column
                prop="desc"
                label="預約內容"
                min-width="275"
            >
                <template slot-scope="scope">
                   {{ desc(scope.row.desc) }}
                </template>
            </el-table-column>
            <el-table-column
                prop="nailist"
                label="服務人員"
                min-width="100"
            />
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="日曆模式" name="second">日曆模式</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
            date: '08/02',
            time: '09:00',
            name: '郝思嘉 (Scarlett)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/02',
            time: '13:00',
            name: '韓美蘭 (Melanie)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '單色'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/02',
            time: '16:00',
            name: '大山姆 (Big Sam)',
            subject: '手部深層保養',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/02',
            time: '19:00',
            name: '英迪雅 (India)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/03',
            time: '09:00',
            name: '蘇倫 (Suellen)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/03',
            time: '16:00',
            name: '衛希禮 (Ashley)',
            subject: '手部基礎保養',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/04',
            time: '09:00',
            name: '埃倫 (Ellen)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/04',
            time: '14:00',
            name: '卡琳 (Carreen)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/05',
            time: '09:00',
            name: '奶媽 (Mammy)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }, {
            date: '08/05',
            time: '09:00',
            name: '麥迪夫人 (Mrs. Meade)',
            subject: '手部凝膠指甲',
            desc: {
                0: {
                    title: '款示',
                    content: '高階'
                },
                1: {
                    title: '延甲',
                    content: '4'
                },
                2: {
                    title: '卸甲',
                    content: '本店'
                },
            },
            nailist: 'Quinn'
        }]
      }
    },
    methods: {
        handleClick(tab, event) {
        },
        desc(desc) {
            let result = ''
            for (let [key, value] of Object.entries(desc)) {
                key == 0 ? result += `${value.title}：${value.content}` : result += `，${value.title}：${value.content}`
            }
            return result
        }
    }
}
</script>

<template>
  <el-tabs v-model="activeName">
    <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-document" /> 列表顯示</span>
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
            >
                <template slot-scope="scope">
                    <span class="u_link">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="subject"
                label="預約項目"
                min-width="150"
            />
            <el-table-column
                prop="desc"
                label="預約內容"
                min-width="190"
            >
                <template slot-scope="scope">
                   {{ desc(scope.row.desc) }}
                </template>
            </el-table-column>
            <el-table-column
                prop="nailist"
                label="服務人員"
                min-width="85"
            />
            <el-table-column
                label="操作"
                min-width="85"
            >
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleForm(scope.row)">
                        <svg-icon icon-class="edit" />
                        <span class="el-button__text">操作</span>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane name="second">
        <span slot="label"><i class="el-icon-date" /> 日曆顯示</span>
        日曆顯示
    </el-tab-pane>
    <el-dialog title="本次預約消費記錄" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="客人稱謂" :label-width="formLabelWidth">
                <el-input v-model="form.name" disabled />
            </el-form-item>
            <el-form-item label="客人稱謂" :label-width="formLabelWidth">
                <el-radio-group v-model="form.arrivalTime">
                    <el-radio-button label="準時" />
                    <el-radio-button label="遲到十分內" />
                    <el-radio-button label="遲到拒接" />
                    <el-radio-button label="爽約" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="消費項目" :label-width="formLabelWidth">
                <el-cascader
                    v-model="form.subject"
                    :options="options"
                />
            </el-form-item>
            <el-form-item label="消費內容" :label-width="formLabelWidth">
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
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
                subject: '手部凝膠 / 高階',
                desc: {
                    0: {
                        title: '延甲',
                        content: '4'
                    },
                    1: {
                        title: '卸甲',
                        content: '本店'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/02',
                time: '13:00',
                name: '韓美蘭 (Melanie)',
                subject: '手部凝膠 / 單色',
                desc: {
                    0: {
                        title: '延甲',
                        content: '0'
                    },
                    1: {
                        title: '卸甲',
                        content: '本店'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/02',
                time: '16:00',
                name: '大山姆 (Big Sam)',
                subject: '手部保養 / 深層',
                desc: {
                    0: {
                        title: '延甲',
                        content: '0'
                    },
                    1: {
                        title: '卸甲',
                        content: '否'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/02',
                time: '19:00',
                name: '英迪雅 (India)',
                subject: '手部凝膠 / 法式',
                desc: {
                    0: {
                        title: '延甲',
                        content: '0'
                    },
                    1: {
                        title: '卸甲',
                        content: '本店'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/03',
                time: '09:00',
                name: '蘇倫 (Suellen)',
                subject: '手部凝膠 / 高階',
                desc: {
                    0: {
                        title: '延甲',
                        content: '0'
                    },
                    1: {
                        title: '卸甲',
                        content: '他店'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/03',
                time: '16:00',
                name: '衛希禮 (Ashley)',
                subject: '手部保養 / 基礎',
                desc: {
                    0: {
                        title: '延甲',
                        content: '0'
                    },
                    1: {
                        title: '卸甲',
                        content: '否'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/04',
                time: '09:00',
                name: '埃倫 (Ellen)',
                subject: '妝感霧眉 / 補色',
                desc: {
                    0: {
                        title: '次數',
                        content: '1'
                    }
                },
                nailist: 'Quinn'
            }, {
                date: '08/04',
                time: '14:00',
                name: '卡琳 (Carreen)',
                subject: '手部凝膠 / 高階',
                desc: {
                    0: {
                        title: '延甲',
                        content: '4'
                    },
                    1: {
                        title: '卸甲',
                        content: '本店'
                    },
                },
                nailist: 'Quinn'
            }, {
                date: '08/05',
                time: '09:00',
                name: '奶媽 (Mammy)',
                subject: '熱蠟除毛 / 全身',
                desc: {
                },
                nailist: 'Quinn'
            }, {
                date: '08/05',
                time: '09:00',
                name: '麥迪夫人 (Mrs. Meade)',
                subject: '手部凝膠 / 低階',
                desc: {
                    0: {
                        title: '延甲',
                        content: '0'
                    },
                    1: {
                        title: '卸甲',
                        content: '否'
                    },
                },
                nailist: 'Quinn'
            }],
            dialogFormVisible: false,
            form: {
                name: '',
                arrivalTime: '',
                subject: []
            },
            value: [],
            options: [{
                value: 'handGel',
                label: '手部凝膠',
                children: [{
                    value: 'tehui',
                    label: '特惠款'
                }, {
                    value: 'gaojeo',
                    label: '高階'
                }, {
                    value: 'zhongjie',
                    label: '中階'
                }, {
                    value: 'dijie',
                    label: '低階'
                }, {
                    value: 'danse',
                    label: '單色'
                }, {
                    value: 'fashi',
                    label: '法式'
                }, {
                    value: 'jianceng',
                    label: '漸層'
                }]
            }, {
                value: 'handCare',
                label: '手部保養',
                children: [{
                    value: 'handjichu',
                    label: '基礎'
                }, {
                    value: 'handshenceng',
                    label: '深層'
                }]
            }, {
                value: 'waxRemoval',
                label: '熱蠟除毛',
                children: [{
                    value: 'meimao',
                    label: '眉毛'
                }, {
                    value: 'renzhong',
                    label: '人中'
                }, {
                    value: 'yexia',
                    label: '腋下'
                }, {
                    value: 'xiaotui',
                    label: '小腿'
                }, {
                    value: 'shoubu',
                    label: '手部'
                }, {
                    value: 'simi',
                    label: '私密'
                }, {
                    value: 'quanshen',
                    label: '全身'
                }]
            }, {
                value: 'makeup',
                label: '妝感霧眉',
                children: [{
                    value: 'xinzuo',
                    label: '新做'
                }, {
                    value: 'buse',
                    label: '補色'
                }, {
                    value: 'gaise',
                    label: '改色'
                }, {
                    value: 'gaixing',
                    label: '改型'
                }]
            }],
            formLabelWidth: '120px'
        }
    },
    methods: {
        handleForm(row) {
            this.form.name = row.name
            this.dialogFormVisible = true
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

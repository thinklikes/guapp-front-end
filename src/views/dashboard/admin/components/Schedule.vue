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
                label="顧客稱謂"
                min-width="180"
            >
                <template slot-scope="scope">
                    <span class="u_link">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="subject"
                label="預約項目"
                min-width="140"
            />
            <el-table-column
                prop="desc"
                label="其他"
                min-width="180"
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
            <el-form-item label="消費時間" :label-width="formLabelWidth">
                <el-input v-model="form.time" disabled />
            </el-form-item>
            <el-form-item label="顧客稱謂" :label-width="formLabelWidth">
                <el-input v-model="form.name" disabled />
            </el-form-item>
            <el-form-item label="抵達狀態" :label-width="formLabelWidth">
                <el-radio-group v-model="form.arrivalTime">
                    <el-radio-button label="準時" />
                    <el-radio-button label="遲到十分內" />
                    <el-radio-button label="遲到拒接" />
                    <el-radio-button label="爽約" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="消費項目" :label-width="formLabelWidth">
                <el-cascader
                    class="is_full"
                    v-model="form.subject"
                    :options="options"
                    clearable
                />
            </el-form-item>
            <el-form-item label="延甲" :label-width="formLabelWidth" v-show="formDesc() == 1">
                <el-radio-group v-model="form.extension">
                    <el-radio :label="0">0</el-radio>
                    <el-radio :label="1">1</el-radio>
                    <el-radio :label="2">2</el-radio>
                    <el-radio :label="3">3</el-radio>
                    <el-radio :label="4">4</el-radio>
                    <el-radio :label="5">5</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="卸甲" :label-width="formLabelWidth" v-show="formDesc() == 1 || formDesc() == 2">
                <el-radio-group v-model="form.remove">
                    <el-radio-button label="本店" />
                    <el-radio-button label="他店" />
                    <el-radio-button label="否" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="備註" :label-width="formLabelWidth">
                <el-input v-model="form.remark" type="textarea" resize="none" />
            </el-form-item>
            <el-form-item label="操作前後" :label-width="formLabelWidth">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="消費金額" :label-width="formLabelWidth">
                <el-input v-model="form.amount" />
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button class="is_normal" @click="dialogFormVisible = false">取消</el-button>
            <el-button class="is_normal" type="primary" @click="dialogFormVisible = false">確定</el-button>
        </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
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
                time: '',
                name: '',
                arrivalTime: '',
                subject: [],
                extension: '',
                remove: '',
                remark: '',
                amount: ''
            },
            value: [],
            options: [{
                value: 'handGel',
                label: '手部凝膠',
                children: [{
                    value: 'tehui',
                    label: '特惠款',
                    children: [{
                        value: 'a',
                        label: 'A',
                    }, {
                        value: 'b',
                        label: 'B',
                    }, {
                        value: 'c',
                        label: 'C',
                    }, {
                        value: 'd',
                        label: 'D',
                    }]
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
            formLabelWidth: '120px',
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        handleForm(row) {
            this.form.time = row.date + ' ' + row.time
            this.form.name = row.name
            this.dialogFormVisible = true
        },
        desc(desc) {
            let result = ''
            for (let [key, value] of Object.entries(desc)) {
                key == 0 ? result += `${value.title}：${value.content}` : result += `，${value.title}：${value.content}`
            }
            return result
        },
        formDesc() {
            switch(this.form.subject[0]) {
                case 'handGel':
                    return 1
                case 'handCare':
                    return 2
                case 'makeup':
                    return 3
                default:
                    return 0
            }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
}
</script>

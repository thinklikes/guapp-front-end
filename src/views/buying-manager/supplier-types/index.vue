<template>
    <div class="app-container">
        <div class="custom-tree-container">
            <div class="block">
                <el-button
                    type="text"
                    size="mini"
                    @click="append"
                >
                    {{ $t('table.add') }}
                </el-button>
                <el-input
                    v-model="filterText"
                    :placeholder="$t('table.search')"
                />
                <el-tree
                    ref="dataTree"
                    v-loading="loading"
                    node-key="id"
                    :filter-node-method="filterNode"
                    :empty-text="loadingStr"
                    :data="treeData"
                    :expand-on-click-node="false"
                >
                    <span slot-scope="{ node, data }" class="custom-tree-node">
                        <el-input
                            v-show="showField(node)"
                            :ref="'input' + node.key"
                            v-model="data.label"
                            type="text"
                            size="mini"
                            :placeholder="$t('supplierTypes.placeholder.name')"
                            clearable
                            @blur="() => blurField(node)"
                        />
                        <span
                            v-show="!showField(node)"
                        >
                            {{ node.label }}
                        </span>
                        <span>
                            <el-button
                                type="text"
                                size="mini"
                                @click="() => focusField(node)"
                            >
                                {{ $t('table.edit') }}
                            </el-button>
                            <el-button
                                type="text"
                                size="mini"
                                @click="() => remove(node, data)"
                            >
                                {{ $t('table.delete') }}
                            </el-button>
                        </span>
                    </span>
                </el-tree>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchList } from '@/api/supplier-types'
import { create } from '@/api/supplier-types'
import { update } from '@/api/supplier-types'
import { destroy } from '@/api/supplier-types'

export default {
    name: 'SupplierTypes',
    data() {
        return {
            treeData: [],
            loadingStr: 'Loading ....',
            loading: true,
            editField: '',
            filterText: ''
        }
    },

    watch: {
        filterText(val) {
            this.$refs.dataTree.filter(val)
        }
    },

    created() {
        fetchList().then(response => {
            this.treeData = response.contents
            this.loading = false
        }).catch(e => {
            console.log(e)
        })
    },

    methods: {
        filterNode(value, data) {
            if (!value) return true
            return data.label.indexOf(value) !== -1
        },

        append() {
            const newChild = { label: 'new one', children: [] }
            create(newChild).then(response => {
                newChild.id = response.contents.id
                this.$refs.dataTree.append(newChild)
            }).catch(e => {
                console.log(e)
            })
        },

        remove(node, data) {
            this.$confirm(this.$t('table.deleteWarning'), this.$t('table.prompt'), {
                confirmButtonText: this.$t('el.messagebox.confirm'),
                cancelButtonText: this.$t('el.messagebox.cancel'),
                type: 'warning'
            }).then(() => {
                destroy(data).then(() => {
                    this.$refs.dataTree.remove(node)
                    this.$message({
                        type: 'success',
                        message: this.$t('form.deleted-successfully')
                    })
                }).catch(e => {
                    console.log(e)
                })
            }).catch(e => {
                this.$message({
                    type: 'info',
                    message: this.$t('form.deleted-cancel')
                })
            })
        },

        focusField(node) {
            this.editField = node.key

            this.$nextTick(() => this.$refs['input' + node.key].focus())
        },

        blurField(node) {
            update(node.data)
            this.editField = ''
        },

        showField(node) {
            return this.editField === node.key
        }
    }
}
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>

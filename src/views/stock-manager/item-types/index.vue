<template>
    <div class="app-container">
        <div class="custom-tree-container">
            <div class="block">
                <el-button
                    type="text"
                    size="mini"
                    @click="() => append()"
                >
                    {{ $t('table.add') }}
                </el-button>
                <el-input
                    v-model="filterText"
                    :placeholder="$t('table.search')"
                />
                <el-tree
                    ref="itemTypeTree"
                    v-loading="loading"
                    node-key="id"
                    :filter-node-method="filterNode"
                    :empty-text="loadingStr"
                    :data="treeData"
                    :expand-on-click-node="false"
                    draggable
                    :allow-drop="allowDrop"
                    @node-drop="handleDrop"
                >
                    <span slot-scope="{ node, data }" class="custom-tree-node">
                        <el-input
                            v-show="showField(node)"
                            :ref="'input' + node.key"
                            v-model="data.label"
                            type="text"
                            size="mini"
                            :placeholder="$t('itemTypes.placeholder.name')"
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
                                @click="() => append(node)"
                            >
                                {{ $t('table.append') }}
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
import { fetchList } from '@/api/item-types'
import { create } from '@/api/item-types'
import { update } from '@/api/item-types'
import { updatePriority } from '@/api/item-types'
import { destroy } from '@/api/item-types'

const MAX_PATH_NODES = 3

export default {
    name: 'ItemTypes',
    data() {
        return {
            treeData: [],
            loadingStr: 'Loading ....',
            loading: true,
            editField: '',
            oldParentKeyBeforeDragging: '',
            oldIndexBeforeDragging: 0,
            filterText: ''
        }
    },
    watch: {
        filterText(val) {
            this.$refs.itemTypeTree.filter(val)
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
        append(parentNode = null) {
            const newChild = { label: 'new item', children: [] }
            newChild.parent_id = parentNode == null ? 0 : parentNode.data.id
            create(newChild).then(response => {
                newChild.id = response.contents.id
                this.$refs.itemTypeTree.append(newChild, parentNode)
                if (parentNode) {
                    parentNode.expand()
                }
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
                this.$refs.itemTypeTree.remove(node)
                destroy(data).then(() => {
                    this.$message({
                        type: 'success',
                        message: this.$t('form.deleted-successfully')
                    })
                }).catch(e => {
                    console.log(e)
                })
            }).catch(() => {
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
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            let parent
            if ((dropType === 'before' || dropType === 'after')) {
                parent = dropNode.parent
            } else if (dropType === 'inner') {
                parent = dropNode
            }
            const parentId = parent.data.id ? parent.data.id : 0
            let children = parent.data.children || parent.data
            children = Object.values(children).map(item => item.id)
            updatePriority(
                draggingNode.data, parentId, children
            )
        },
        allowDrop(draggingNode, dropNode, dropType) {
            // return false;
            const subChildren = draggingNode.data.children
            let levelOfCurrent = subChildren == null ? 1 : 2
            let parent

            if (subChildren != null) {
                subChildren.forEach(function(subChild) {
                    if (subChild.children != null) {
                        levelOfCurrent += 1
                        return false
                    }
                })
            }

            if ((dropType === 'prev' || dropType === 'next')) {
                parent = dropNode.parent
            } else if (dropType === 'inner') {
                parent = dropNode
            }

            const parentLevel = parent.label === undefined
                ? 0
                : parent.level

            return (parentLevel + levelOfCurrent) <= MAX_PATH_NODES
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


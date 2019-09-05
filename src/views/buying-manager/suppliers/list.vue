<template>
    <div class="app-container">
        <div class="custom-tree-container">
            <div class="block">
                <div class="filter-container">
                    <el-input
                        v-model="queryString"
                        :placeholder="$t('suppliers.label.name')"
                        style="width: 200px;"
                        class="filter-item"
                        @keyup.enter.native="handleFilter"
                    />

                    <SupplierTypeSelector
                        v-model="typeId"
                        class="filter-item"
                    />

                    <el-button
                        class="filter-item"
                        type="primary"
                        icon="el-icon-search"
                        @click="handleFilter"
                    >
                        {{ $t('table.search') }}
                    </el-button>
                    <el-button
                        class="filter-item"
                        style="margin-left: 10px;"
                        type="primary"
                        icon="el-icon-edit"
                        @click="add"
                    >
                        {{ $t('table.add') }}
                    </el-button>
                </div>
                <el-table
                    v-loading="loading"
                    :empty-text="loadingStr"
                    :data="data"
                    style="width: 100%"
                >
                    <el-table-column
                        :label="$t('suppliers.label.supplierTypeId')"
                    >
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.supplier_type.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        :label="$t('suppliers.label.name')"
                    >
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">
                                <router-link :to="mainPATH + '/show/'+scope.row.id" class="link-type">
                                    <span>{{ scope.row.name }}</span>
                                </router-link>
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        :label="$t('suppliers.label.facebook')"
                    >
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">
                                <span class="u_link" @click="handOpenNewLink(scope.row.facebook)">{{ scope.row.facebook }}</span>
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        :label="$t('suppliers.label.website')"
                    >
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">
                                <span class="u_link" @click="handOpenNewLink(scope.row.website)">{{ scope.row.website }}</span>
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination-container">
                    <el-pagination
                        background
                        layout="sizes, prev, pager, next, total"
                        :total="total"
                        :page-size="perPage"
                        :current-page="currentPage"
                        :page-sizes="[50, 100, 200, 250]"
                        @current-change="changePage"
                        @size-change="changeSize"
                        @prev-click="prevPage"
                        @next-click="nextPage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { fetchList } from '@/api/suppliers'
import { default as SupplierTypeSelector } from '@/components/Selectors/SupplierTypeSelector'

const mainPATH = '/buying-manager/suppliers'

export default {
    name: 'SupplierList',
    components: { SupplierTypeSelector },
    data() {
        return {
            data: [],
            loadingStr: 'Loading ....',
            loading: true,
            currentPage: 1,
            total: 0,
            perPage: 50,
            queryString: '',
            typeId: null,
            mainPATH: mainPATH
        }
    },
    watch: {
        currentPage: function() {
            this.requestPage()
        },
        perPage: function() {
            this.requestPage()
        }
    },
    created() {
        this.requestPage()
    },

    methods: {
        add() {
            this.$router.push({ path: mainPATH + '/create' })
        },

        changeSize(size) {
            this.perPage = size
            this.currentPage = 1
        },

        changePage(page) {
            this.currentPage = page
        },

        prevPage() {
            this.currentPage = this.currentPage === 1 ? 1 : this.currentPage - 1
        },

        nextPage() {
            this.currentPage += 1
        },

        requestPage() {
            this.loading = true

            const queryItem = {
                currentPage: this.currentPage,
                perPage: this.perPage,
                queryString: this.queryString,
                typeId: this.typeId
            }

            fetchList(queryItem).then(response => {
                this.loading = false
                this.parseResponseValues(response)
                if (this.data.length === 0) {
                    this.loadingStr = this.$t('el.tree.emptyText')
                }
                scrollTo(0, 0)
            }).catch(e => {
                console.log(e)
            })
        },

        parseResponseValues(response) {
            this.data = response.contents.data
            this.total = response.contents.total
            this.currentPage = response.contents.current_page
            this.total = response.contents.total
            this.perPage = parseInt(response.contents.per_page)
        },

        handleFilter() {
            this.currentPage = 1

            this.requestPage()
        },

        handOpenNewLink(url) {
            window.open(url, '_blank')
        }
    }
}
</script>

<style scoped>
  .pagination-container {
    background: #fff;
    padding: 32px 16px;
  }
  .pagination-container.hidden {
    display: none;
  }
</style>

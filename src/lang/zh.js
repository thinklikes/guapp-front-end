export default {
    route: {
        dashboard: '首頁',
        documentation: '文檔',
        guide: '引導頁',
        permission: '權限測試頁',
        rolePermission: '角色權限',
        pagePermission: '頁面權限',
        directivePermission: '指令權限',
        icons: '圖標',
        components: '組件',
        tinymce: '富文本編輯器',
        markdown: 'Markdown',
        jsonEditor: 'JSON 編輯器',
        dndList: '列表拖拽',
        splitPane: 'Splitpane',
        avatarUpload: '頭像上傳',
        dropzone: 'Dropzone',
        sticky: 'Sticky',
        countTo: 'Count To',
        componentMixin: '小組件',
        backToTop: '返回頂部',
        dragDialog: '拖拽 Dialog',
        dragSelect: '拖拽 Select',
        dragKanban: '可拖拽看板',
        charts: '圖表',
        keyboardChart: '鍵盤圖表',
        lineChart: '折線圖',
        mixChart: '混合圖表',
        example: '綜合實例',
        nested: '路由嵌套',
        menu1: '菜單1',
        'menu1-1': '菜單 1-1',
        'menu1-2': '菜單 1-2',
        'menu1-2-1': '菜單 1-2-1',
        'menu1-2-2': '菜單 1-2-2',
        'menu1-3': '菜單 1-3',
        menu2: '菜單 2',
        Table: 'Table',
        dynamicTable: '動態 Table',
        dragTable: '拖拽 Table',
        inlineEditTable: 'Table 內編輯',
        complexTable: '綜合 Table',
        tab: 'Tab',
        form: '表單',
        createArticle: '創建文章',
        editArticle: '編輯文章',
        articleList: '文章列表',
        errorPages: '錯誤頁面',
        page401: '401',
        page404: '404',
        errorLog: '錯誤日誌',
        excel: 'Excel',
        exportExcel: '導出 Excel',
        selectExcel: '導出 已選擇項',
        mergeHeader: '導出 多級表頭',
        uploadExcel: '上傳 Excel',
        zip: 'Zip',
        pdf: 'PDF',
        exportZip: 'Export Zip',
        theme: '換膚',
        clipboardDemo: 'Clipboard',
        i18n: '國際化',
        externalLink: '外鏈',
        profile: '個人中心',
        'stock-manager': '庫存管理',
        'items': '品項管理',
        'item-units': '品項單位',
        'item-types': '品項類別',
        'items-list': '品項列表',
        'items-create': '新增品項',
        'items-show': '品項資料',
        'items-edit': '修改品項',
        'buying-manager': '進貨管理',
        'suppliers': '廠商管理',
        'suppliers-list': '廠商列表',
        'suppliers-create': '新增廠商',
        'suppliers-show': '廠商資料',
        'suppliers-edit': '修改廠商',
        'supplier-types': '廠商類別',
        'warehouses': '倉庫管理',
        'warehouses-list': '倉庫列表',
        'warehouses-create': '新增倉庫',
        'warehouses-show': '倉庫資料',
        'warehouses-edit': '修改倉庫',
        'purchase-orders': '採購單管理',
        'purchase-orders-list': '採購單列表',
        'purchase-orders-create': '新增採購單',
        'purchase-orders-show': '採購單資料',
        'purchase-orders-edit': '修改採購單'
    },
    navbar: {
        dashboard: '首頁',
        github: '項目地址',
        logOut: '退出登錄',
        profile: '個人中心',
        theme: '換膚',
        size: '佈局大小'
    },
    login: {
        title: '系統登錄',
        logIn: '登錄',
        username: '賬號',
        password: '密碼',
        any: '隨便填',
        thirdparty: '第三方登錄',
        thirdpartyTips: '本地不能模擬，請結合自己業務進行模擬！！！'
    },
    documentation: {
        documentation: '文檔',
        github: 'Github 地址'
    },
    permission: {
        addRole: '新增角色',
        editPermission: '編輯權限',
        roles: '你的權限',
        switchRoles: '切換權限',
        tips: '在某些情況下，不適合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它動態渲染 dom 的場景。你只能通過append手動設置 v-if 來實現。',
        delete: '刪除',
        confirm: '確定',
        cancel: '取消'
    },
    guide: {
        description: '引導頁對於一些第一次進入項目的人很有用，你可以簡單介紹下項目的功能。本 Demo 是基於',
        button: '打開引導'
    },
    components: {
        documentation: '文檔',
        tinymceTips: '富文本是管理後台一個核心的功能，但同時又是一個有很多坑的地方。在選擇富文本的過程中我也走了不少的彎路，市面上常見的富文本都基本用過了，最終權衡了一下選擇了Tinymce。更詳細的富文本比較和介紹見',
        dropzoneTips: '由於我司業務有特殊需求，而且要傳七牛 所以沒用第三方，選擇了自己封裝。代碼非常的簡單，具體代碼你可以在這里看到 @/components/Dropzone',
        stickyTips: '當頁面滾動到預設的位置會吸附在頂部',
        backToTopTips1: '頁面滾動到指定位置會在右下角出現返回頂部按鈕',
        backToTopTips2: '可自定義按鈕的樣式、show/hide、出現的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
        imageUploadTips: '由於我在使用時它只有vue@1版本，而且和mockjs不相容，所以自己改造了一下，如果大家要使用的話，優先還是使用官方版本。'
    },
    table: {
        dynamicTips1: '固定表頭, 按照表頭順序排序',
        dynamicTips2: '不固定表頭, 按照點擊順序排序',
        dragTips1: '默認順序',
        dragTips2: '拖拽後順序',
        title: '標題',
        importance: '重要性',
        type: '類型',
        remark: '點評',
        search: '搜尋',
        add: '新增一筆',
        export: '匯出',
        reviewer: '審核人',
        id: '序號',
        date: '時間',
        author: '作者',
        readings: '閱讀數',
        status: '狀態',
        actions: '操作',
        edit: '編輯',
        publish: '發布',
        draft: '草稿',
        delete: '刪除',
        cancel: '取 消',
        confirm: '確 定',
        append: '附加一筆',
        prompt: '提示',
        deleteWarning: '是否刪除?',
        createdAt: '建立時間',
        updatedAt: '更新時間',
        note: '備註',
        subtotal: '小計',
        total: '合計',
        quantity: '數量',
        noteOfItem: '品項備註'
    },
    common: {
        colon: '：'
    },
    link: {
        open: '開啟連結'
    },
    example: {
        warning: '創建和編輯頁面是不能被 keep-alive 緩存的，因為keep-alive 的 include 目前不支持根據路由來緩存，所以目前都是基於 component name 來進行緩存的。如果你想類似的實現緩存效果，可以使用 localStorage 等瀏覽器緩存方案。或者不要使用 keep-alive 的 include，直接緩存所有頁面。詳情見'
    },
    errorLog: {
        tips: '請點擊右上角bug小圖標',
        description: '現在的管理後台基本都是spa的形式了，它增強了用戶體驗，但同時也會增加頁面出問題的可能性，可能一個小小的疏忽就導致整個頁面的死鎖。好在 Vue 官網提供了一個方法來捕獲處理異常，你可以在其中進行錯誤處理或者異常上報。',
        documentation: '文檔介紹'
    },
    excel: {
        export: '導出',
        selectedExport: '導出已選擇項',
        placeholder: '請輸入文件名(默認excel-list)'
    },
    zip: {
        export: '導出',
        placeholder: '請輸入文件名(默認file)'
    },
    pdf: {
        tips: '這里使用   window.print() 來實現下載pdf的功能'
    },
    theme: {
        change: '換膚',
        documentation: '換膚文檔',
        tips: 'Tips: 它區別於 navbar 上的 theme-pick, 是兩種不同的換膚方法，各自有不同的應用場景，具體請參考文檔。'
    },
    tagsView: {
        refresh: '刷新',
        close: '關閉',
        closeOthers: '關閉其它',
        closeAll: '關閉所有'
    },
    settings: {
        title: '系統佈局配置',
        theme: '主題色',
        tagsView: '開啟 Tags-View',
        fixedHeader: '固定 Header',
        sidebarLogo: '側邊欄 Logo'
    },
    selector: {
        placeholder: '請選擇'
    },
    form: {
        submit: '送出',
        reset: '重置',
        'created-successfully': '新增成功',
        'updated-successfully': '更新成功',
        'deleted-successfully': '刪除成功',
        'deleted-cancel': '取消刪除'
    },
    items: {
        label: {
            code: '品項代碼',
            name: '品項名稱',
            itemTypeId: '品項類型',
            itemUnitId: '品項單位',
            buyingPrize: '進貨價格',
            sellingPrize: '銷售價格',
            note: '品項備註'
        },
        placeholder: {
            code: '請輸入品項代碼',
            name: '請輸入品項名稱',
            itemTypeId: '請輸入品項類型',
            itemUnitId: '請輸入品項單位',
            buyingPrize: '請輸入進貨價格',
            sellingPrize: '請輸入銷售價格'
        }
    },
    warehouses: {
        label: {
            code: '倉庫代碼',
            name: '倉庫名稱',
            comment: '倉庫說明'
        },
        placeholder: {
            code: '請輸入倉庫代碼',
            name: '請輸入倉庫名稱'
        }
    },
    itemTypes: {
        placeholder: {
            name: '請輸入品項類型名稱'
        }
    },
    itemUnits: {
        placeholder: {
            name: '請輸入品項單位名稱'
        }
    },
    supplierTypes: {
        placeholder: {
            name: '請輸入廠商類型'
        }
    },
    suppliers: {
        label: {
            name: '廠商名稱',
            supplierTypeId: '廠商類型',
            phone: '廠商電話',
            address: '廠商地址',
            facebook: 'facebook',
            website: '廠商網址',
            note: '備註'
        },
        placeholder: {
            name: '請填入廠商名稱',
            supplierTypeId: '請填入廠商類型'
        },
        typeError: {
            facebook: 'facebook網址錯誤',
            website: '廠商網址錯誤'
        }
    },
    orders: {
        label: {
            code: '採購單編號',
            taxType: '稅別',
            receivingDate: '收貨日期'
        },
        placeholder: {
            // name: '請填入廠商名稱',
            taxType: '請填入稅別'
        },
        typeError: {
            // facebook: 'facebook網址錯誤',
            // website: '廠商網址錯誤'
        }
    },
    details: {
        label: {
            quantity: '數量',
            price: '價格',
            price_rate: '折扣',
            note: '品項備註'
        },
        placeholder: {
            // supplierId: '請填入廠商名稱'
            // supplierTypeId: '請填入廠商類型'
        },
        typeError: {
            // facebook: 'facebook網址錯誤',
            // website: '廠商網址錯誤'
        }
    }
}

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'dashboard', icon: 'dashboard', affix: true }
            }
        ]
    },
    {
        path: '/stock-manager',
        component: Layout,
        redirect: '/stock-manager/items/list',
        name: 'StockManager',
        meta: {
            title: 'stock-manager',
            icon: 'boxes'
        },
        children: [
            {
                path: 'item-types',
                component: () => import('@/views/stock-manager/item-types'),
                name: 'ItemTypes',
                meta: { title: 'item-types' }
            },
            {
                path: 'item-units',
                component: () => import('@/views/stock-manager/item-units'),
                name: 'ItemUnits',
                meta: { title: 'item-units' }
            },
            {
                path: 'items',
                component: () => import('@/views/stock-manager/items'),
                redirect: '/stock-manager/items/list',
                name: 'Items',
                meta: {
                    title: 'items'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('@/views/stock-manager/items/list'),
                        name: 'ItemList',
                        meta: { title: 'items-list' }
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/stock-manager/items/create'),
                        name: 'CreateItem',
                        meta: { title: 'items-create' }
                    },
                    {
                        path: 'edit/:id(\\d+)',
                        component: () => import('@/views/stock-manager/items/create'),
                        name: 'EditItem',
                        meta: { title: 'items-edit' },
                        hidden: true
                    },
                    {
                        path: 'show/:id(\\d+)',
                        component: () => import('@/views/stock-manager/items/show'),
                        name: 'ShowItem',
                        meta: { title: 'items-show' },
                        hidden: true
                    }
                ]
            },
            {
                path: 'warehouses',
                component: () => import('@/views/stock-manager/warehouses'),
                redirect: '/stock-manager/warehouses/list',
                name: 'Warehouses',
                meta: {
                    title: 'warehouses'
                },
                children: [
                    {
                        path: 'list',
                        component: () => import('@/views/stock-manager/warehouses/list'),
                        name: 'WarehouseList',
                        meta: { title: 'warehouses-list' }
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/stock-manager/warehouses/create'),
                        name: 'CreateWarehouse',
                        meta: { title: 'warehouses-create' }
                    },
                    {
                        path: 'edit/:id(\\d+)',
                        component: () => import('@/views/stock-manager/warehouses/create'),
                        name: 'EditWarehouse',
                        meta: { title: 'warehouses-edit' },
                        hidden: true
                    },
                    {
                        path: 'show/:id(\\d+)',
                        component: () => import('@/views/stock-manager/warehouses/show'),
                        name: 'ShowWarehouse',
                        meta: { title: 'warehouses-show' },
                        hidden: true
                    }
                ]
            }
        ]
    },
    {
        path: '/buying-manager',
        component: Layout,
        redirect: '/buying-manager/suppliers/list',
        name: 'BuyingManager',
        meta: {
            title: 'buying-manager',
            icon: 'bill'
        },
        children: [
            {
                path: 'supplier-types',
                component: () => import('@/views/buying-manager/supplier-types'),
                name: 'SupplierTypes',
                meta: { title: 'supplier-types' }
            },
            {
                path: 'suppliers',
                component: () => import('@/views/buying-manager/suppliers'),
                name: 'Suppliers',
                meta: { title: 'suppliers' },
                redirect: '/buying-manager/suppliers/list',
                children: [
                    {
                        path: 'list',
                        component: () => import('@/views/buying-manager/suppliers/list'),
                        name: 'SupplierList',
                        meta: { title: 'suppliers-list' }
                    },
                    {
                        path: 'create',
                        component: () => import('@/views/buying-manager/suppliers/create'),
                        name: 'CreateSupplier',
                        meta: { title: 'suppliers-create' }
                    },
                    {
                        path: 'edit/:id(\\d+)',
                        component: () => import('@/views/buying-manager/suppliers/create'),
                        name: 'EditSupplier',
                        meta: { title: 'suppliers-edit' },
                        hidden: true
                    },
                    {
                        path: 'show/:id(\\d+)',
                        component: () => import('@/views/buying-manager/suppliers/show'),
                        name: 'ShowSupplier',
                        meta: { title: 'suppliers-show' },
                        hidden: true
                    }
                ]
            }
        ]
    }
]

export const asyncRoutes = []

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router

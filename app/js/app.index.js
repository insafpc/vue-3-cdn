// create appIndex
const app = Vue.createApp({})

// create routes
const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home',
    },
    {
        path: '/product/:id',
        component: ProductDetail,
        name: 'product',
    },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
app.use(router)

//create store
app.use(store)

// import components
app.component('HomePage', HomePage)
app.component('NavBar', NavBar)
app.component('ProductList', ProductList)
app.component('ProductItem', ProductItem)
app.component('FooterMain', FooterMain)

// mount vue app to #app div
app.mount('#app')
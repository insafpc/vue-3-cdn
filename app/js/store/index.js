const store = Vuex.createStore({
    state: {
        products: [],
        isLoading: false,
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },
        setFavProduct(state, payload) {
            state.products = state.products.map(product => {
                if (product._id === payload) {
                    product.isFav = !product.isFav
                console.log(product)
                    return Object.assign({}, product, product)
                }
                return product
            },)
        },
        setLoading(state, payload) {
            state.isLoading = payload
        },
        sortProducts(state, payload) {
           state.isLoading = true
            // SortBy Price
            if(payload === 'priceAsc') {
                state.products.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
            } else if(payload === 'priceDes') {
                state.products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
            } else if(payload === 'name') {
                state.products.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            }

            state.isLoading = false
        },
    },
    actions: {
        tryFetchProducts({commit}) {
            // fetch data from API
            commit('setLoading', true)
            fetch('http://localhost:8080/src/data/products.json').then(res => res.json()).then(data => {
                commit('setProducts', data)
                commit('setLoading', false)
            }).catch(reason => {
                console.log(reason)
                commit('setLoading', false)
            })
        }
    },
})

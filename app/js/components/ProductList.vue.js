const ProductList = {
    template: `
        <!-- product actions bar -->
        <div class="row">
            <div class="col-lg-12 my-3">
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <p class="font-weight-bold m-0">94 Results</p>
                    </div>
                    <div class="d-flex align-items-center">
                         <select class="form-control mr-3" @change="sortProducts($event)">
                          <option value="" disabled selected hidden>Sort</option>
                          <option value="priceAsc">Price (High - Low)</option>
                          <option value="priceDes">Price (Low - High)</option>
                          <option value="name">Name</option>
                        </select>
                        <div class="btn-group btn-group-toggle ">
                          <label class="btn btn-secondary" :class="{ active: listStyle === 'grid' }">
                            <input type="radio" v-model="listStyle" value="grid"  id="option1" autocomplete="off" > 
                            <i class="fa fa-th-large" aria-hidden="true"></i>
                          </label>
                          <label class="btn btn-secondary" :class="{ active: listStyle === 'list-group-item' }">
                            <input type="radio" v-model="listStyle" value="list-group-item"  id="option2" autocomplete="off">             
                            <i class="fa fa-list" aria-hidden="true"></i>
                          </label>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- product list -->
        <div id="products" class="row view-group" v-if="$store.state.products.length">
            <div class="item col-xs-4 col-lg-4" :class="listStyle" v-for="product in $store.state.products" :key="product._id">
                <product-item :product="product"></product-item>    
            </div>
        </div>
        
        <!-- product warning info -->
        <div class="alert alert-info" v-else role="alert">
          {{$store.state.isLoading === true ? 'Products is loading': 'No products available.'}}
        </div>
    `,
    data() {
        return {
            listStyle: "grid",
        };
    },
    mounted() {
        store.dispatch('tryFetchProducts')
    },
    methods: {
        sortProducts(event) {
            store.commit('sortProducts', event.target.value)
        }
    },
}
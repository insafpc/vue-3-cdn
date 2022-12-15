const ProductDetail = {
    template: `
        <h2 class="mt-4">Product Detail - {{product.name}}</h2>
        <div class="row view-group ">
            <div class="list-group-item item">
              <product-item :product="product" class="list-group-item"></product-item>  
               <router-link  :to="{name:'home'}" class="m-auto d-block text-center">
                    Back to home
                </router-link>
            </div>
            
        </div>
    `,
    computed: {
        product() {
            if (this.$store.state.products.length) {
                return this.$store.state.products.filter(product => product._id === this.$route.params.id)[0]
            } else {
               return  router.push('/')
            }
        }
    }
}
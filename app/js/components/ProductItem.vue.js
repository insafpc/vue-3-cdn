const ProductItem = {
    template: `
        <div class="thumbnail card">
            <div class="img-event">
               <router-link  :to="{name:'product', params: { id: product._id }}">
                    <img class="group list-group-image img-fluid" :src="product.picture ? product.picture :'http://placehold.it/400x250/000/fff'" alt="" />
                </router-link>
                <div class="card-img-overlay">
                <button  class="card-fav btn btn-light" @click="setFavourite(product._id)">
                    <i class="fa fa-heart fa-lg" v-if="product.isFav" aria-hidden="true"></i>
                    <i class="fa fa-heart-o fa-lg" v-else aria-hidden="true"></i>
                </button>
            </div>
        </div>           
            <div class="caption card-body">
                <h4 class="group card-title inner list-group-item-heading">
                    <router-link  :to="{name:'product', params: { id: product._id }}">
                    {{product.name ? product.name: 'Unknown Product'}}
                    </router-link>
                </h4>
                <div class="d-flex align-items-center mb-2">
                    <p class="card-info m-0 mr-3"> {{product.size ? product.size: 'Size not provided'}}</p>
                    <div class="d-flex align-items-center">
                        <i class="fa fa-star" aria-hidden="true" v-for="index in product.rating" :key="index"></i> 
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <p class="lead font-weight-bold">{{product.price ? product.price: '0'}}</p>
                    <p class="ml-2 offer-price-cross cross-text">{{product.oldPrice}}</p>
                    <p class="ml-2 offer-info" v-if="product.savings">You save {{product.savings}}</p>
                </div>
            </div>
        </div>
    `,
    props: ['product'],
    methods: {
        setFavourite(id){
            store.commit('setFavProduct', id)
        }
    },
}
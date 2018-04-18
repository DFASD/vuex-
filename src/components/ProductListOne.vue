<template>
  <div id="product-list-one">
  	<h1>ProductListOne</h1>
    <ul>
    	<li v-for="(product,index) in saleProducts">
    		<span class="name">{{product.name}}</span>
    		<span class="name">${{product.price}}</span>
    	</li>
    </ul>
   <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
	computed:{
		products(){
			return this.$store.state.products;
		},
		// saleProducts(){
		// 	return this.$store.getters.saleProducts;
		// }
		...mapGetters(['saleProducts'])
	},
	methods:{
		// reducePrice(amout){
			// 不使用传统的更改方法，不利于调试
			// this.$store.state.products.forEach(product=>{
			// 	product.price--;
			// })

			// this.$store.commit('reducePrice');
			// this.$store.dispatch('reducePrice',amout);
		// }
		...mapActions(['reducePrice'])
	}
}
</script>

<style scoped>
	ul{
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
	ul,li{
		list-style: none;
	}
	li{
		height: 50px;
		line-height: 50px;
		background: #ddd;
		flex: 1;
		margin: 0 30px;

	}
</style>

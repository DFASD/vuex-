<template>
  <div id="product-list-one">
  	<h1>ProductListTwo</h1>
    <ul>
    	<li v-for="(product,index) in saleProducts">
    		<span class="name">{{product.name}}</span>
    		<span class="name">{{product.price}}</span>
    	</li>
    </ul>
    
   
  </div>
</template>

<script>

export default {
	computed:{
		products(){
			return this.$store.state.products;
		},
		saleProducts(){
			return this.$store.getters.saleProducts;	
		}
	},
	methods:{
		
	}
}
</script>

<style scoped>
	ul,li{
		list-style: none;
	}
	ul{
		column-count: 4;
		column-gap: 30px;
		text-align: center;
	}
	li{
		background-color: #555;
		height: 50px;
		line-height: 50px;
	}
</style>

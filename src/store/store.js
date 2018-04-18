import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		products:[
	        {name:'码云',price:200},
	        {name:'马虎疼',price:140},
	        {name:'马冬梅',price:20},
	        {name:'马蓉',price:10}
      	]
	},
	getters:{
		saleProducts:(state)=>{
			var saleProducts=state.products.map(
				product=>{
					return {
						name:'**' + product.name + '**',
						price:product.price/2
					}
				}
			)
			return saleProducts;
		}	
	},
	mutations:{

		reducePrice:(state,payload)=>{
			// setTimeout(()=>{
				state.products.forEach(product=>{
					product.price-=payload;
				})
			// },3000)
		}
	},
	actions:{
		reducePrice:(context,payload)=>{
			setTimeout(()=>{
				context.commit('reducePrice',payload);
			},2000)
		}
	}
})
export {store};
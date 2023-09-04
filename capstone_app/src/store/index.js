import { createStore } from 'vuex';

export default createStore({
  state: {
    products: null,
  },
  mutations: {
    setProducts: (state, value) =>{
      state.products = value;
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        let { products } = await (
          await fetch('https://capstone-88ut.onrender.com/items')
        ).json();
        if (products) {
          context.commit('setProducts', products);
        }
        else{
          alert('An error seems to have ocurred while trying to fetch products')
        }
      }
      catch (e) {
        console.error(error);
      }
    }, //end of products json
  },
})

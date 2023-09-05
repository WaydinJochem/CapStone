import { createStore } from 'vuex';

export default createStore({
  state: {
    items: null,
    item: null,
  },
  mutations: {
    setItems: (state, products) => {
      state.items = products;
    },
    setItem: (state, product) => {
      state.item = product;
    }
  },
  actions: {
    async fetchItems(context) {
      try {
        let response = await fetch(`https://capstone-88ut.onrender.com/items`);
        let { results } = await response.json();
        if (results) {
          context.commit("setItems", results);
        }
        else {
          alert('An error seems to have ocurred while trying to fetch products')
        }
      }
      catch (err) {
        console.error(err);
      }
    }, //end of products json
    async fetchItem(context, id) {
      try {
        let response = await fetch(`https://capstone-88ut.onrender.com/items/` + id);
        let { results } = await response.json();
        if (results) {
          context.commit("setItem", results);
        }
        else {
          alert('Unable to retrieve product ID')
        }
      }
      catch (err) {
        console.error(err);
      }
    }, //end of get single product json
  },
})

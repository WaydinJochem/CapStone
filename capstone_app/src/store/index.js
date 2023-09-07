import { createStore } from 'vuex';
const render = 'https://capstone-88ut.onrender.com/';
import axios from 'axios';

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
    },
    addItem: (state, newItem) => {
      state.items.push(newItem)
    },

  },
  actions: {
    async fetchItems(context) {
      try {
        const response = await fetch(`${render}items`);
        const { results } = await response.json();
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
        const response = await fetch(`${render}items/` + id);
        const { results } = await response.json();
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
    async AddItem(context, newItem) {
      try {
        const response = await axios.post(`${render}items`, newItem)
        if (response) {
          context.dispatch("fetchItems")
          context.commit("setItems", response.data);
        }
        else {
          alert('Post was unsuccessful')
        }
      }
      catch (err) {
        console.error(err);
      }
    }//post 
  },
})

import { createStore } from 'vuex';
const render = 'https://capstone-88ut.onrender.com/';
import axios from 'axios';
// import { assertLiteral } from '@babel/types';
// import { container } from 'webpack';

export default createStore({
  state: {
    items: null,
    item: null,
    users: null,
    user: null,
  },
  mutations: {
    setItems: (state, products) => {
      state.items = products;
    },
    setItem: (state, product) => {
      state.item = product;
    },
    // addItem: (state, newItem) => {
    //   state.items.push(newItem)
    // },

    // Users mutations start
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    }
    // users mutations end

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
    },//post 
    async RemoveItem(context, prodID) {
      try {
        const response = await axios.delete(`${render}items/${prodID}`)
        if (response) {
          context.dispatch("fetchItems")
          context.commit("setItem", response.data)
        }
        else {
          alert("delete was unsuccessful")
        }
      }
      catch (err) {
        console.error(err);
      }
    },//delete
    async Edit(context, updatedItem) {
      try {
        const response = await axios.patch(`${render}items/${updatedItem.prodID}`, updatedItem)
        if (response) {
          context.dispatch("fetchItems")
          context.commit("setItem", response.data)
        }
        else {
          alert("update unsuccessful")
        }
      }
      catch (err) {
        console.error(err)
      }
    }//patch

    //  Users actions start

    // Users actions end
  },
})

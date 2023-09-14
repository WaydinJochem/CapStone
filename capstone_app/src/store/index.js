import { createStore } from 'vuex';
const render = 'https://capstone-88ut.onrender.com/';
import axios from 'axios';
import VueCookies from 'vue-cookies';
import router from '@/router';
import authuser from '@/services/authuser';
import sweetAlert from 'sweetalert'

// import { assertLiteral } from '@babel/types';
// import { container } from 'webpack';
VueCookies.config('1h')
export default createStore({
  state: {
    items: null,
    item: null,
    users: null,
    user: null,
    msg: null,
    // userData: VueCookies.get('userData') || null,
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
    },
    clearUserData(state) {
      state.user = null;
      VueCookies.remove('userToken');
    },
    setMsg: (state, msg) => {
      state.msg = msg;
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
    },//patch

    //  Users actions start
    async fetchUsers(context) {
      try {
        const response = await fetch(`${render}users`);
        const { results } = await response.json();
        if (results) {
          context.commit("setUsers", results);
        }
        else {
          alert('An error seems to have ocurred while trying to fetch users')
        }
      }
      catch (err) {
        console.error(err);
      }
    },//fetch all users
    async fetchUser(context, id) {
      try {
        const response = await fetch(`${render}users/` + id);
        const { results } = await response.json();
        if (results) {
          context.commit("setUser", results);
        }
        else {
          alert('Unable to retrieve user ID')
        }
      }
      catch (err) {
        console.error(err);
      }
    },
    // Add newUsers
    async Register(context, newUser) {
      try {
        const response = await axios.post(`${render}register`, newUser)
        if (response) {
          context.commit("setUsers", response.data);
        }
        else {
          alert('Post was unsuccessful')
        }
      }
      catch (err) {
        console.error(err);
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${render}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          VueCookies.set("userToken", { msg, token, result });
          authuser.applyToken(token);
            sweetAlert({
              title: msg,
              text: `Welcome back ${result?.firstName} ${result?.lastName}`,
              icon: "success",
              timer: 1000,
            });
            router.push({ name: "home" });
          } else {
            sweetAlert({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 1000,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occurred");
        }
      },







    //Delete Users+

    async RemoveUser(context, userID) {
        try {
          const response = await axios.delete(`${render}users/${userID}`)
          if (response) {
            context.dispatch("fetchUsers")
            context.commit("setUser", response.data)
          }
          else {
            alert("delete was unsuccessful")
          }
        }
        catch (err) {
          console.error(err);
        }
      },

    // Update Users
    async updateUser(context, updatedItem) {
        try {
          const response = await axios.patch(`${render}users/${updatedItem.userID}`, updatedItem)
          if (response) {
            context.dispatch("fetchUsers")
            context.commit("setUser", response.data)
          }
          else {
            alert("update unsuccessful")
          }
        }
        catch (err) {
          console.error(err)
        }
      },
    // Users actions end
    async logout(context) {
        try {
          // Clear user-related state and cookies
          context.commit('setUser');
          context.commit('clearUserData'); // This mutation clears user-related data
          router.push({ name: 'login' });
          location.reload() // Redirect to the login page (adjust the route name as needed)
        } catch (err) {
          console.error(err);
          alert('An error occurred during logout.');
        }
      },

      //Login creating cookie
      // async Login(context, )
    },
  })

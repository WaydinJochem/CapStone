import { createStore } from 'vuex';
const render = 'https://capstone-88ut.onrender.com/';
import axios from 'axios';
import VueCookies from 'vue-cookies';
// import { assertLiteral } from '@babel/types';
// import { container } from 'webpack';
VueCookies.config('1h')
export default createStore({
  state: {
    items: null,
    item: null,
    users: null,
    user: null,
    userData: VueCookies.get('userData') || null,
    userToken: VueCookies.get('userToken') || null,
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
    setToken: (state, token) => {
      state.userToken = token;
      VueCookies.set('userToken', token, '1h')
    },
    setUserData(state, userData) {
      state.userData = userData;
      VueCookies.set('userData', JSON.stringify(userData), '1h');
    },
    clearUserData(state) {
      state.userData = null;
      VueCookies.remove('userData');
    },
    // users mutations end

  },
  actions: {
    // async Register({ commit }, newUser) {
    //   try {
    //     const response = await axios.post(`${render}register`, newUser);

    //     if (response.data && response.data.token) {
    //       const token = response.data.token;

    //       // Set the user token using the mutation
    //       commit('setToken', token);
    //     } else {
    //       alert('Registration failed. Please check your input.');
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    // async register({ commit, dispatch }, newUser) {
    //   try {
    //     const response = await axios.post(`${render}register`, newUser);

    //     if (response.status === 200) {
    //       // Registration successful, you can choose to automatically log in the user here
    //       // You can also redirect to the login page or perform other actions
    //       alert('Registration successful');
    //       dispatch('redirect', '/login'); // Redirect to the login page
    //     } else {
    //       alert('Registration failed. Please check your input.');
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     alert('An error occurred during registration.');
    //   }
    // },

    // redirect(context, path) {
    //   this.$router.push(path); // Replace `this.$router` with your router instance
    // },

    // async login({ commit }, { email, password }) {
    //   try {
    //     const response = await axios.post(`${render}login`, { email, password });

    //     if (response.data && response.data.token) {
    //       const token = response.data.token;
    //       const userData = response.data.userData;

    //       commit('setToken', token);
    //       commit('setUserData', userData);

    //       // Redirect to the dashboard or another page after successful login
    //     } else {
    //       alert('Login failed. Please check your credentials.');
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     alert('An error occurred during login.');
    //   }
    // },
    
    // async register({ commit }, newUser) {
    //   try {
    //     const response = await axios.post(`${render}register`, newUser);

    //     if (response.status === 200) {
    //       // Registration successful, you can choose to automatically log in the user here
    //       // You can also redirect to the login page or perform other actions
    //       alert('Registration successful');
    //     } else {
    //       alert('Registration failed. Please check your input.');
    //     }
    //   } catch (err) {
      //     console.error(err);
    //     alert('An error occurred during registration.');
    //   }
    // },



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
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post(`${render}login`, { emailAdd: email, userPwd: password });

        if (response.data.token) {
          const token = response.data.token;
          const userData = response.data.result;

          commit('setToken', token);
          commit('setUserData', userData);

          // Redirect to the dashboard or another page after successful login
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred during login.');
      }
    },
    
    





    //Delete Users
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


    //Login creating cookie
    // async Login(context, )
  },
})

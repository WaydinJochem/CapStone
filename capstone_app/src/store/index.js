import { createStore } from "vuex";
const render = "https://capstone-88ut.onrender.com/";
import axios from "axios";
import VueCookies from "vue-cookies";
import router from "@/router";
import authuser from "@/services/authuser";
import sweetAlert from "sweetalert";

// import { assertLiteral } from '@babel/types';
// import { container } from 'webpack';
VueCookies.config("1h");
export default createStore({
  state: {
    items: null,
    item: null,
    users: null,
    user: null,
    userRole: null,
    msg: null,
    cart: null
    // userData: VueCookies.get('userData') || null,
  },
  getters: {  
    cartItems: (state) => state.cartItems,
  },
  mutations: {
    setCart(state, cart) {
      state.cart = cart
    },
    addToCart(state, item) {
      state.cart.push(item);
    },
    removeFromCart(state, cartID) {
      // Remove the item from the cart state
      state.cart = state.cart.filter((cart) => cart.cartID !== cartID);
    },
    clearCart(state) {
      state.cartItems = [];
    },
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
      state.userRole = null;
      VueCookies.remove("userToken");
    },
    setMsg: (state, msg) => {
      state.msg = msg;
    },
    setFilteredProducts(state, selectedCategory) { // Mutation to set filteredProducts
      state.filteredProducts = state.items.filter((product) => {
        return product.Category === selectedCategory || selectedCategory === "all";
      });
    },

    // users mutations end
  },
  actions: {
    async getCart(context, id) {
      const res = await axios.get(`${render}/user/${id}/carts`);
      context.commit('setCart', res.data)
      console.log(res.data);
    },

    async addToCart(context, { userID, prodID }) {
      try {
        // Send a POST request to your server's API endpoint
        const response = await axios.post(`${render}/user/${userID}/cart`, {
          userID,
          prodID,
        });
    
        // Handle the response as needed
        if (response.status === 200) {
    
          context.commit('addProductToCart', response.data); // Assuming the response contains the added product
        } else {
          // Handle other response statuses or errors
          // You can also use try-catch blocks to handle errors more precisely
        }
      } catch (error) {
        console.error(error);
      }
    },
    async removeFromCart(context, { userID, cartID }) {
      try {
        await axios.delete(`${render}/user/${userID}/cart/${cartID}`);
    
        commit('removeFromCart', cartID);
      } catch (error) {
        console.error(error);
      }
    },
    
    async clearCart(context, { userID }) {
      try {
        await axios.delete(`${render}/users/${userID}/cart`);
        context.commit("clearCart", userID);
      } catch (error) {
        console.error(error);
      }
    },
    
    async fetchItems(context) {
      try {
        const response = await fetch(`${render}items`);
        const { results } = await response.json();
        if (results) {
          context.commit("setItems", results);
        } else {
          sweetAlert("Oops..", "Unable to fetch Products", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }, //end of products json
    async fetchItem(context, id) {
      try {
        const response = await fetch(`${render}items/` + id);
        const { results } = await response.json();
        if (results) {
          context.commit("setItem", results);
        } else {
          sweetAlert("Oops..", "Unable to fetch Product", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }, //end of get single product json
    async AddItem(context, newItem) {
      try {
        const response = await axios.post(`${render}items`, newItem);
        if (response) {
          context.dispatch("fetchItems");
          context.commit("setItems", response.data);
        } else {
          sweetAlert("Oops..", "Unable to add Product", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }, //post
    async RemoveItem(context, prodID) {
      try {
        const response = await axios.delete(`${render}items/${prodID}`);
        if (response) {
          context.dispatch("fetchItems");
          context.commit("setItem", response.data);
        } else {
          sweetAlert("Oops..", "Unable to Delete Product", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }, //delete
    async Edit(context, updatedItem) {
      try {
        const response = await axios.patch(
          `${render}items/${updatedItem.prodID}`,
          updatedItem
        );
        if (response) {
          context.dispatch("fetchItems");
          context.commit("setItem", response.data);
        } else {
          sweetAlert("Oops..", "Update Unsuccessful", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }, //patch

    //  Users actions start
    async fetchUsers(context) {
      try {
        const response = await fetch(`${render}users`);
        const { results } = await response.json();
        if (results) {
          context.commit("setUsers", results);
        } else {
          sweetAlert("Oops..", "Unable to fetch Users", "error");
        }
      } catch (err) {
        console.error(err);
      }
    }, //fetch all users
    async fetchUser(context, id) {
      try {
        const response = await fetch(`${render}users/` + id);
        const { results } = await response.json();
        if (results) {
          context.commit("setUser", results);
        } else {
          sweetAlert("Oops..", "Unable to fetch User ID", "error");
        }
      } catch (err) {
        console.error(err);
      }
    },
    // Add newUsers
    async Register(context, newUser) {
      try {
        const response = await axios.post(`${render}register`, newUser);
        if (response) {
          context.commit("setUsers", response.data);
        } else {
          sweetAlert("Oops..", "Registration Unsuccessful", "error");
        }
      } catch (err) {
        console.error(err);
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result, userRole } = (
          await axios.post(`${render}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg, userRole });
          VueCookies.set("userToken", { msg, token, result, userRole });
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
        const response = await axios.delete(`${render}users/${userID}`);
        if (response) {
          context.dispatch("fetchUsers");
          context.commit("setUser", response.data);
        } else {
          sweetAlert("Oops..", "Unable to Remove User", "error");
        }
      } catch (err) {
        console.error(err);
      }
    },

    // Update Users
    async updateUser(context, updatedItem) {
      try {
        const response = await axios.patch(
          `${render}users/${updatedItem.userID}`,
          updatedItem
        );
        if (response) {
          context.dispatch("fetchUsers");
          context.commit("setUser", response.data);
        } else {
          sweetAlert("Oops..", "Update Unsuccessful", "error");
        }
      } catch (err) {
        console.error(err);
      }
    },
    // Users actions end
    async logout(context) {
      try {
        // Clear user-related state and cookies
        context.commit("setUser");
        context.commit("clearUserData"); // This mutation clears user-related data
        router.push({ name: "login" });
        location.reload(); // Redirect to the login page (adjust the route name as needed)
      } catch (err) {
        console.error(err);
        sweetAlert("Oops..", "Failed to logout", "error");
      }
    },

    //Login creating cookie
    // async Login(context, )
  //   async fetchCartItems(context, id) {
  //     try {
  //       const response = await axios.get(`${render}/user/${id}/cart`); // Updated URL
  //       commit("setCartItems", response.data);
  //       console.log(id);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },

  //   async addToCart(context, { userId, productId }) {
  //     try {
  //       await axios.post(`${render}/user/${userId}/cart`, {
  //         userId,
  //         productId,
  //       });
  //       if (response.status === 200) {
  //         context.commit("addProductToCart", response.data);
  //       } else {
  //       }
  //       // Updated URL
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },

  //   async removeFromCart(context, { userId, cartId }) {
  //     try {
  //       await axios.delete(`${render}/user/${userId}/cart/${cartId}`);
  //      context.commit("removeFromCart", cartId)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },

  //   async clearCart(context, userId) {
  //     try {
  //       await axios.delete(`${render}/users/${userId}/cart`); // Updated URL
  //       context.commit("clearCart", userId);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
 
  },
});

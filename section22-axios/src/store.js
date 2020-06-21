import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios-auth";
import globalAxios from 'axios';
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId
    },
    storeUser(state, user)
    {
      state.user = user;
    },
    clearAuthData(state)
    {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    setLogOutTimer(context, expirationTime){
      setTimeout(() => {
        context.commit('clearAuthData');
      }, expirationTime * 1000)
    },
    signUp(context, authData){
      axios.post('/accounts:signUp?key=AIzaSyCJxbX9WxkzH3TMEt_ba6xSENAXtE8sl1w', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(response => {
            context.commit('authUser', {
              idToken: response.data.idToken,
              userId: response.data.localId
            });
            const now = new Date();
            const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('idToken', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('expirationDate', expirationDate);

            context.dispatch('storeUser', authData);
            context.dispatch('setLogOutTimer', response.data.expiresIn);
          })
          .catch(error => {
            console.log(error);
          });
    },
    logIn(context, authData){
      axios.post('/accounts:signInWithPassword?key=AIzaSyCJxbX9WxkzH3TMEt_ba6xSENAXtE8sl1w', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
          .then(response => {
            const now = new Date();
            const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('idToken', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('expirationDate', expirationDate);
            context.commit('authUser', {
              idToken: response.data.idToken,
              userId: response.data.localId
            });
            context.dispatch('setLogOutTimer', response.data.expiresIn)
          })
          .catch(error => {
            console.log(error);
          });
    },
    tryAutoLogin(context){
      const token = localStorage.getItem('idToken');
      const userId = localStorage.getItem('userId');
      const expiration = new Date(localStorage.getItem('expirationDate'));
      const now = new Date();

      if(!token){
        return
      }

      if(now >= expiration)
      {
        return
      }

      context.commit('authUser', {idToken: token, userId: userId})
    },
    storeUser(context, userData){

      if(!context.state.idToken){
        return;
      }
      // base url set in main.js
      // the way you pass the token depends on the backend
      globalAxios.post('/users.json'  + '?auth=' + context.state.idToken, userData)
          .then(response=>console.log(response))
          .catch(error=>console.log(error));
    },
    fetchUser(context){
      globalAxios.get('/users.json' + '?auth=' + context.state.idToken)
          .then(response => {
            console.log(response);
            const data = response.data;
            const users = [];
            for(let key in data)
            {
              const user = data[key];
              user.id = key;
              users.push(user)
            }
            console.log(users);
            context.commit('storeUser',users[1]);
          })
          .catch(error => console.log(error));
    },
    logOut(context){
      context.commit('clearAuthData');
      localStorage.removeItem('idToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('expirationDate');
      router.replace('/signin');
    }
  },
  getters: {
    user(state){
      return state.user;
    },
    isAuthenticated(state){
      return state.idToken != null;
    }
  }
})
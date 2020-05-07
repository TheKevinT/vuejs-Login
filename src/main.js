import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

Vue.config.productionTip = false

let app = null;

//no se creen instancias de inicio de sesion
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})
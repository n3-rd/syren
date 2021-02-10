import Vue from 'vue'
import App from './App.vue'
import './quasar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

Vue.use(LottieAnimation);

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

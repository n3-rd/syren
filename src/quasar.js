import Vue from 'vue'

import './styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import iconSet from 'quasar/icon-set/ionicons-v4.js'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  iconSet: iconSet
 })
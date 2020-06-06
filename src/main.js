import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import "normalize.css"

import store from './store'
import router from '@/plugins/router'

const requireComponent = require.context(
  './components',
  
  false,

  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
 
  const componentConfig = requireComponent(fileName)

  
  const componentName = upperFirst(
    camelCase(
      
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(
    componentName,

    componentConfig.default || componentConfig
  )
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import { createStore } from 'vuex'
import { storeApp } from "@/vuex/modules/store_app"
import { storeAssign } from "@/vuex/modules/store_assign"
import { storeRegister } from "@/vuex/modules/store_register"
import { storeUser } from "@/vuex/modules/store_user"


// import createPersistedState from 'vuex-persistedstate'


// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

export default createStore({
  // plugins: [ createPersistedState({ storage: window.sessionStorage }) ],
  // modules: modules,
  modules: {
    storeApp,
    storeAssign,
    storeRegister,
    storeUser,
  }
})



import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const files = require.context('./modules', false, /\.js$/)
const modules = { namespaced: true }

files.keys().forEach(file => {
  files(file).default['namespaced'] = true
  modules[file.replace(/(\.\/|\.js)/g, '')] = files(file).default
})

export default new Vuex.Store({
  modules
});

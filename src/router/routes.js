const files = require.context('./modules', false, /\.js$/)

const modules = {}
files.keys().forEach(file => {
  modules[file.replace(/(\.\/|\.js)/g, '')] = files(file).default
})
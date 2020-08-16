import Cookies from 'js-cookie'

const cookie = {}

cookie.get = (name) => {
  return Cookies.get(name)
}

cookie.remove = (name) => {
  return Cookies.remove(name)
}

cookie.set = (name, value) => {
  Cookies.set(name, value)
}

export default cookie
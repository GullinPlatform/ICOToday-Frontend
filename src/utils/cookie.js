import Cookies from 'js-cookie'
import { COOKIE_CONFIG } from '../config.js'

export const setCookie = (name, value) => {
  Cookies.set(name, value, COOKIE_CONFIG)
}

export const getCookie = (name) => {
  if (Cookies.get(name))
    return Cookies.get(name)
  else return null
}

export const delCookie = (name) => {
  Cookies.remove(name, COOKIE_CONFIG)
}

export const API_ROOT = (process.env.NODE_ENV === 'production') ?
  'https://api.icotoday.io' :
  'http://localhost:8000'

export const COOKIE_DOMAIN = (process.env.NODE_ENV === 'production') ?
  'icotoday.io' :
  'localhost'

// cookie expired in 1 day
// Options: '1Y' '1M' '1D' '1h' '1m' '1s'
const COOKIE_EXPIRE = 1

export const COOKIE_CONFIG = (process.env.NODE_ENV === 'production') ?
  {expires: COOKIE_EXPIRE, domain: 'icotoday.io', path: '/', secure: true} :
  {expires: COOKIE_EXPIRE, domain: 'localhost', path: '/', secure: false}



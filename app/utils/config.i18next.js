var path = require('path');

let dirPath = (process.env.NODE_ENV === 'production') ? path.join(__dirname, '../Resources') : '.';
let i18nextOptions = module.exports = {
  backend: {
    loadPath: dirPath + '/locales/{{lng}}/{{ns}}.json',
    addPath: dirPath + '/locales/{{lng}}/{{ns}}.missing.json'
  },
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  saveMissing: true,
  fallbackLng: 'en',
  returnEmptyString: false,
  whitelist: ['en', 'es'],
  keySeparator: false,
  nsSeparator: '|',
  debug: false,
  wait: true
};
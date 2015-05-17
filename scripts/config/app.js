'use strict';

var config = {

  /*
  |--------------------------------------------------------------------------
  | Determine Route Base Path
  |--------------------------------------------------------------------------
  |
  | Here we will set the base path for the application. Mostly this is
  | important when you want to create multilingual application and want to
  | switch the language depending on url (ex. example.com/en).
  |
  */

  'root_path': LOCALE === 'ja' ? '/' : `/${LOCALE}/`

};

export default config;

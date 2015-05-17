'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';

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

var rootPath = LOCALE === 'ja' ? '/' : `/${LOCALE}/`;

/*
|--------------------------------------------------------------------------
| Application
|--------------------------------------------------------------------------
|
| Here is where you can register your application modules.
|
*/

import App from 'app/apps/App/routes';
import Footer from 'app/apps/Footer/Footer';

var modules = {

  'app': {
    module: App
  },

  'footer': {
    withoutRoute: true,
    module: Footer
  }

};

export default modules;

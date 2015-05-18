'use strict';

import Application from 'app/foundations/Application';

/*
|--------------------------------------------------------------------------
| Create Application
|--------------------------------------------------------------------------
|
| First we'll create application instance by passing modules you need for
| this application to run.
|
*/

import App from 'app/apps/App/routes';
import Footer from 'app/apps/Footer/Footer';

var app = new Application({
  'app': {
    module: App
  },

  'footer': {
    withoutRoute: true,
    module: Footer
  }
});

/*
|--------------------------------------------------------------------------
| Start The Application
|--------------------------------------------------------------------------
|
| Then we'll kick off the app.
|
*/

app.start();

'use strict';

import Application from 'app/foundations/Application';
import modules from 'app/modules/app';

/*
|--------------------------------------------------------------------------
| Create Application
|--------------------------------------------------------------------------
|
| First we'll create application instance by passing modules you need for
| this application to run.
|
*/

var app = new Application(modules);

/*
|--------------------------------------------------------------------------
| Start The Application
|--------------------------------------------------------------------------
|
| Then we'll kick off the app.
|
*/

app.start();

requirejs.config({
  paths: {
    'text': '../lib/requirejs-text/text',
    'durandal':'../lib/Durandal/js',
    'plugins' : '../lib/Durandal/js/plugins',
    'transitions' : '../lib/Durandal/js/transitions',
    'knockout': '../lib/knockout.js/knockout',
    'jquery': '../lib/jquery/jquery.min'
    }
});

define([
  'durandal/system',
  'durandal/app',
  'durandal/viewLocator'
], function (
  system,
  app,
  viewLocator
) {
   system.debug(true);

   app.title = 'Scales';

   app.configurePlugins({
     router: true,
     dialog: true
   });

   app.start().then(function() {
     viewLocator.useConvention();

     app.setRoot('viewmodels/shell');
   });
});

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('ethiopianConstractionDirectories', {
    url: '/page2',
    templateUrl: 'templates/ethiopianConstractionDirectories.html',
    controller: 'ethiopianConstractionDirectoriesCtrl'
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('categoryINDEX', {
    url: '/page5',
    templateUrl: 'templates/categoryINDEX.html',
    controller: 'categoryINDEXCtrl'
  })

  .state('about', {
    url: '/page6',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('contact', {
    url: '/page7',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })

  .state('aBABEGAZTRADINGPLC', {
    url: '/page10',
    templateUrl: 'templates/aBABEGAZTRADINGPLC.html',
    controller: 'aBABEGAZTRADINGPLCCtrl'
  })

  .state('aBAYBANKSC', {
    url: '/page12',
    templateUrl: 'templates/aBAYBANKSC.html',
    controller: 'aBAYBANKSCCtrl'
  })

  .state('aluminum', {
    url: '/page8',
    templateUrl: 'templates/aluminum.html',
    controller: 'aluminumCtrl'
  })

  .state('bank', {
    url: '/page11',
    templateUrl: 'templates/bank.html',
    controller: 'bankCtrl'
  })

  .state('bitumen', {
    url: '/page14',
    templateUrl: 'templates/bitumen.html',
    controller: 'bitumenCtrl'
  })

  .state('brickHydraFoamBlock', {
    url: '/page15',
    templateUrl: 'templates/brickHydraFoamBlock.html',
    controller: 'brickHydraFoamBlockCtrl'
  })

  .state('defaultPage', {
    url: '/page9',
    templateUrl: 'templates/defaultPage.html',
    controller: 'defaultPageCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});
'use strict';

/**
 * @ngdoc overview
 * @name etsyApp
 * @description
 * # etsyApp, 
 * # a simple app that searches etsy products 
 * # with a google material ui
 *
 * Main module of the application.
 */
angular
  .module('etsyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider,$mdThemingProvider,localStorageServiceProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple');

    localStorageServiceProvider
      .setPrefix('etsyApp');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('ETSY', {
    key: 'YOUR_API_KEY_HERE',
    url: 'https://openapi.etsy.com/v2/'
  });

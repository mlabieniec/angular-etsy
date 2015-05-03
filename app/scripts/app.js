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
    
    //Available palettes: red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
    $mdThemingProvider.theme('default')
        .primaryPalette('brown');

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
    key: 'ez1dnf9z37v2pdunpcrufkrk',
    url: 'https://openapi.etsy.com/v2/'
  });
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
    'ngMaterial'
  ])
  .config(function ($routeProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange');
    $mdThemingProvider.theme('docs-dark')
        .primaryPalette('blue-grey');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

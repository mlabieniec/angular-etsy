'use strict';

/**
 * @ngdoc directive
 * @name etsyApp.directive:productCard
 * @description
 * # productCard
 */
angular.module('etsyApp')
  .directive('productCard', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {
        
      }
    };
  });

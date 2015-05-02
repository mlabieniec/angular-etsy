'use strict';

/**
 * @ngdoc directive
 * @name etsyApp.directive:activeListings
 * @description
 * # activeListings
 */
angular.module('etsyApp')
  .directive('activeListings', function ($log,$window) {
    return {
      restrict: 'A',
      templateUrl:'views/products.html',
      link: function postLink(scope, element, attrs) {
      	if (!$window.getEtsyData && attrs.key) {
      		$window.getEtsyData = function(data) {
      			scope.etsy = data;
            if (!scope.products) {
              scope.products = data.results;
            } else {
              for (var i = data.results.length - 1; i >= 0; i--) {
                scope.products.push(data.results[i]);
              };
            }
            scope.loading = false;
      			scope.$apply();
      		};
	     } else if (!attrs.key) {
	    	$log.error('No etsy key specified on activeListings directive!');
	     }

       scope.$watch('page',function(page) {
        scope.loading = true;
        $.getScript('https://openapi.etsy.com/v2/listings/active.js?callback=getEtsyData&includes=Images,Shop&page='+page+'&api_key='+attrs.key, function() {});
       });

      }
    };
  });

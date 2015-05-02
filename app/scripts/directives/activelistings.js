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
            $log.debug(data);
      			scope.etsy = data;
      			scope.$apply();
      		};
      		if (attrs.key) { 
        		$.getScript('https://openapi.etsy.com/v2/listings/active.js?callback=getEtsyData&includes=Images&api_key='+attrs.key, function() {});
	   		}
	    } else if (!attrs.key) {
	    	$log.error('No etsy key specified on activeListings directive!');
	    }
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')
  .controller('MainCtrl', function ($scope,$log) {
    var listener = $scope.$watch('etsy',function(etsy) {
    	if(etsy) {
    		$log.debug($scope.etsy);
    		listener();
    	}
    });

    $scope.isProductBookmarked = function(product) {
    	return false;
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')
  .controller('MainCtrl', function ($scope,$log,$mdSidenav,$mdUtil) {
  	$scope.bookmarks = [];
    var listener = $scope.$watch('etsy',function(etsy) {
    	if(etsy) {
    		$log.debug($scope.etsy);
    		listener();
    	}
    });
    
    var buildToggler = function(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug('bookmarks are open');
              });
          },300);
      return debounceFn;
    };

    $scope.toggleBookmarks = buildToggler('right');

    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug('close bookmarks');
        });
    };

    $scope.isProductBookmarked = function(product) {
    	return false;
    };

  });

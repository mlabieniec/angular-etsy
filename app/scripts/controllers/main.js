'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')
  .controller('MainCtrl', function ($scope,$log,$sce,$mdSidenav,$mdUtil,localStorageService) {

  	$scope.unbindBookmarks = localStorageService.bind($scope, 'bookmarks');
    
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

    $scope.removeBookmark = function(product) {
    	delete $scope.bookmarks[product.listing_id];
    };

    $scope.numBookmarks = function() {
	    var size = 0, key;
	    for (key in $scope.bookmarks) {
	        if ($scope.bookmarks.hasOwnProperty(key)) size++;
	    }
	    return size;
	};

    $scope.closeBookmarksNav = function () {
      $mdSidenav('right').close();
    };

    $scope.bookmarkProduct = function(product) {
    	if (!$scope.bookmarks) $scope.bookmarks = {};
    	if (!$scope.bookmarks[product.listing_id]) {
    		$scope.bookmarks[product.listing_id] = product;
    	} else {
    		$scope.removeBookmark(product);
    	}
    };

    $scope.isProductBookmarked = function(product) {
    	return $scope.bookmarks[product.listing_id];
    };

  });

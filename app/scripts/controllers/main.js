'use strict';

/**
 * @ngdoc function
 * @name etsyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the etsyApp
 */
angular.module('etsyApp')
  .controller('MainCtrl', function ($scope,$log,$sce,$mdSidenav,$mdUtil,$mdDialog,localStorageService,ETSY) {

  	$scope.unbindBookmarks = localStorageService.bind($scope, 'bookmarks');
    $scope.page = 1;
    $scope.etsyApiKey = ETSY.key;

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
    $scope.categories = {};

    var productListener = $scope.$watch('products',function(products) {
      if (products && products.length > 0) {
        angular.forEach(products, function(product) {
            for (var i = product.category_path.length - 1; i >= 0; i--) {
              $scope.categories[product.category_path[i]] = {
                'id':product.category_path_ids[i],
                'label':product.category_path[i],
                'selected':true
              };
            }
        });
        
      }
    });

    $scope.getProductCount = function(cat) {
      var count = 0;
      angular.forEach($scope.products,function(product) {
        for (var i = product.category_path_ids.length - 1; i >= 0; i--) {
          if (product.category_path_ids[i] === cat.id) {
            count++;
          }
        }
      });
      return count;
    };

    $scope.getIsProductVisible = function(product) {
      var catSelected = true;
      //this should be improved to search through multiple categories
      angular.forEach($scope.categories,function(cat) {
        if (product.category_id === cat.id) {
          catSelected = cat.selected;
        }
      });
      return catSelected;
    };

    $scope.removeBookmark = function(product) {
    	delete $scope.bookmarks[product.listing_id];
    };

    $scope.numBookmarks = function() {
	    var size = 0, key;
	    for (key in $scope.bookmarks) {
	        if ($scope.bookmarks.hasOwnProperty(key)) {
            size++;
          }
	    }
	    return size;
    };

    $scope.closeBookmarksNav = function () {
      $mdSidenav('right').close();
    };

    $scope.bookmarkProduct = function(product) {
    	if (!$scope.bookmarks) {
        $scope.bookmarks = {};
      }
    	if (!$scope.bookmarks[product.listing_id]) {
    		$scope.bookmarks[product.listing_id] = product;
    	} else {
    		$scope.removeBookmark(product);
    	}
    };

    $scope.isProductBookmarked = function(product) {
    	return ($scope.bookmarks)?$scope.bookmarks[product.listing_id]:false;
    };

    $scope.loadMoreListings = function() {
      $scope.page = $scope.etsy.pagination.next_page;
    };

    $scope.openProductDetails = function($event,product) {
      $mdDialog.show({
        locals: {
           'product': product
         },
        controller: DialogController,
        templateUrl: 'views/details.html',
        targetEvent:$event
      })
      .then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.alert = 'You cancelled the dialog.';
      });
    };

    function DialogController($scope, $mdDialog, product) {
      $scope.product = product;
      $scope.closeDetails = function() {
        $mdDialog.hide();
      };
    }

  });

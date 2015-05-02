'use strict';

/**
 * @ngdoc service
 * @name etsyApp.favoriteService
 * @description
 * # favoriteService
 * Service in the etsyApp.
 */
angular.module('etsyApp')
  .service('favoriteService', function ($q,localStorageService) {
  	var service = {};
  	service.get = function() {
  		return localStorageService.get('bookmarks');
  	};
  	service.set = function(index,product) {
  		localStorageService.set(index,product);
  	};
  	service.remove = function(index) {
  		localStorageService.remove(index);
  	};
  	service.clearAll = function() {
  		localStorageService.clearAll();
  	};
  	return service;
  });

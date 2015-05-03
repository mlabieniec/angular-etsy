'use strict';

describe('Controller: MainCtrl', function() {

    var scope, location, createController, MainCtrl;

    var product = {
        'listing_id':1
    };

    beforeEach(module('etsyApp'));
    beforeEach(inject(function ($rootScope, $controller, $location) {
        location = $location;
        scope = $rootScope.$new();
        createController = function() {
            return $controller('MainCtrl', {
                '$scope': scope
            });
        };
    }));
    
    it('should have 0 bookmarks', function() {
        var controller = createController();
        location.path('/');
        expect(location.path()).toBe('/');
        expect(scope.numBookmarks()).toBe(0);
    });

    it('should add and remove a bookmark', function() {
        var controller = createController();
        scope.bookmarkProduct(product);
        expect(scope.numBookmarks()).toBe(1);
        scope.removeBookmark(product);
        expect(scope.numBookmarks()).toBe(0);
    });

    it('should verify a product is not bookmarked', function() {
        var controller = createController();
        expect(scope.isProductBookmarked(product)).toBeFalsy();
    });

    it('should verify a product is bookmarked', function() {
        var controller = createController();
        scope.bookmarkProduct(product);
        expect(scope.numBookmarks()).toBe(1);
        expect(scope.isProductBookmarked(product)).toBeTruthy();
        scope.removeBookmark(product);
        expect(scope.numBookmarks()).toBe(0);
    });
});

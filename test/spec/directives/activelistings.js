'use strict';

describe('Directive: activeListings', function () {

  beforeEach(module('etsyApp'));

  var elm,
      scope,
      $compile,
      httpBackend;

  beforeEach(inject(function ($rootScope, $httpBackend, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  function compileDirective(tpl) {
		httpBackend.expect('GET', 'views/products.html')
            .respond({
                'success': true,
                'links': []
            });
		if (!tpl) {tpl = '<div class="main" layout-padding active-listings></div>';}
		inject(function($compile) {
		    elm = $compile(tpl)(scope);
		});
		httpBackend.flush();
	}


    it('should produce an error with no api key attribute', function() {
    	compileDirective('<div class="main" layout-padding active-listings></div>');
        expect(elm.html()).toEqual('<strong>No Etsy API Key was provided</strong>');
    });

    it('should work with an api key attribute', function() {
    	compileDirective('<div class="main" key="12345" layout-padding active-listings></div>');
        expect(elm.html()).not.toEqual('<strong>No Etsy API Key was provided</strong>');
    });

});

# Etsy Active Listing Browser [![Build Status](https://travis-ci.org/mlabieniec/angular-etsy.svg)](https://travis-ci.org/mlabieniec/angular-etsy)

![Screenshot](https://raw.githubusercontent.com/mlabieniec/angular-etsy/master/app/images/screenshot.png "Screenshot")

An example app using [Angular JS](https://angularjs.org), [Google Material Design](http://www.google.com/design/spec/material-design/introduction.html) with [angular-material](https://material.angularjs.org). The app is 100% client side, and allows you to search and bookmark [etsy](https://etsy.com) active listings using the etsy JSONP REST API.

Best viewed in [Google Chrome](https://google.com/chrome)

## Overview
The Etsy API JSONP interface is handled with a directive since it requires loading a javascript file (to deal with CORS). This way the product listing can potentially be injected into any view, all that is needed is to inject the Etsy API key. The main Etsy configuration is set as an angular constant in the app config, so you simply need to inject the 'ETSY' provider into your component. This way, other services can use the same API key and url for other calls if extended. 

Google Material is used for the UI for simplicity, responsiveness, and rapid prototyping, and well, cause it looks cool and I'm really tired of bootstrap :) The local storage provider is setup to use a binding, instead o creating a service to avoid the need of redudancy and the need to inject an additional service into any other components. To use local storage, simply inject the local storage provider, and bind to a $scope variable. This way you only need to interact with your $scope as usual. See below for more details on local storage.

A "Load More" is used to load more products from the API instead of pagination, to simplify $scope bindings, and allow for a more fluid, simple interface. Infinite scroll could be added to improve the overall user experience.

Categories for products are dynamically parsed from the current product list. This way only categories that are displaying products are listed in the left side navigation. This way, no additional API calls are needed to get categories for products, and $scope bindings take care of the showing/hiding of the products.

## Build & development

To get up and running:

1. `npm install`
2. `npm install grunt-cli bower -g`
3. `grunt serve`
4. Add your [Etsy API Key](https://www.etsy.com/developers/register) in [app/scripts/app.js](https://github.com/mlabieniec/angular-etsy/blob/master/app/scripts/app.js#L43)

Run `grunt` for building, all files will be minified and gzip'd to /dist. Run `grunt serve` for running with livereload in development.

### Generating Components
You can generate new controllers, models, routes, views, and tests with [generator-angular](https://github.com/yeoman/generator-angular).

 - Install the generators 

`npm install -g yo generator-karma generator-angular`

 - Generate a controller called 'user'

`yo angular:controller user`

This will generator the boilerplate angular controller and tests. Full docs [here](https://github.com/yeoman/generator-angular) for all available methods and generators available.

### CSS Dependancies
All css dependancies are automatically wired from bower_components into index.html via grunt when launching or building. See [here](https://github.com/mlabieniec/angular-etsy/blob/master/app/index.html#L11) and [here](https://github.com/mlabieniec/angular-etsy/blob/master/Gruntfile.js#L179) for details.

### Local Storage
Data is stored via local storage driver, and uses $scope bindings provided by [angular-local-storage](https://github.com/grevory/angular-local-storage). The [bookmarks $scope map](https://github.com/mlabieniec/angular-etsy/blob/master/app/scripts/controllers/main.js#L13) is bound to local storage, so there is no need to CRUD or interact with the local store, just update the $scope variable.

## Testing

Running `grunt test` will run the unit tests with karma. All tests are located in the /test directory, to create new tests it's easiest if you use [generator-angular](https://github.com/yeoman/generator-angular), than modify as needed.

## Etsy API Links

1. [Active listing API](https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive)
2. [Data Structure](https://www.etsy.com/developers/documentation/reference/listing#section_fields)
3. [JSONP](https://www.etsy.com/developers/documentation/getting_started/jsonp#section_using_the_jsonp_interface_with_javascript)
4. [Associations](https://www.etsy.com/developers/documentation/getting_started/resources#section_associations)

# Etsy Active Listing Browser

An example app using [Angular JS](https://angularjs.org), [Google Material Design](http://www.google.com/design/spec/material-design/introduction.html) with [angular-material](https://material.angularjs.org). The app is 100% client side, and allows you to search and bookmark [etsy](https://etsy.com) active listings using the etsy JSONP REST API.

Currently best viewed in [Google Chrome](https://google.com/chrome)

## Build & development

To get up and running:

1. npm install
2. bower install
2. npm install grunt-cli -g
3. grunt serve

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

## Testing

Running `grunt test` will run the unit tests with karma. All tests are located in the /test directory, to create new tests it's easiest if you use [generator-angular](https://github.com/yeoman/generator-angular), than modify as needed.

## Etsy API Links

1. [Active listing API](https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive)
2. [Data Structure](https://www.etsy.com/developers/documentation/reference/listing#section_fields)
3. [JSONP](https://www.etsy.com/developers/documentation/getting_started/jsonp#section_using_the_jsonp_interface_with_javascript)
4. [Associations](https://www.etsy.com/developers/documentation/getting_started/resources#section_associations)

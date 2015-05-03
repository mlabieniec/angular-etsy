# etsy angular

An example app using [Angular JS](https://angularjs.org), [Google Material Design](http://www.google.com/design/spec/material-design/introduction.html) with [angular-material](https://material.angularjs.org). The app is 100% client side, and allows you to search and bookmark [etsy](https://etsy.com) active listings using the etsy JSONP REST API.

## Build & development

To get up and running:

1. npm install
2. bower install
2. npm install grunt-cli -g
3. grunt serve

Run `grunt` for building, all files will be minified and gzip'd to /dist. Run `grunt serve` for running with livereload in development.

### CSS Dependancies
All css dependancies are automatically wired from bower_components into index.html via grunt when launching or building. See (here)[https://github.com/mlabieniec/angular-etsy/blob/master/app/index.html#L11] and (here)[https://github.com/mlabieniec/angular-etsy/blob/master/Gruntfile.js#L179] for details.

## Testing

Running `grunt test` will run the unit tests with karma.

## Etsy API Links

1. [Active listing API](https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive)
2. [Data Structure](https://www.etsy.com/developers/documentation/reference/listing#section_fields)
3. [JSONP](https://www.etsy.com/developers/documentation/getting_started/jsonp#section_using_the_jsonp_interface_with_javascript)
4. [Associations](https://www.etsy.com/developers/documentation/getting_started/resources#section_associations)

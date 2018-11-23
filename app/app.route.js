'use strict';

angular.
  module('myApp').
  config([
    '$locationProvider', 
    '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('/app');
      $routeProvider.
        when('/view1', {
            templateUrl: 'controllers/page1/page1View.html',
            controller: 'Page1Ctrl'
          }).
          when('/view2', {
            templateUrl: 'controllers/page2/page2View.html',
            controller: 'Page2Ctrl'
          }).
        otherwise({redirectTo: '/view1'});
    }
  ]);
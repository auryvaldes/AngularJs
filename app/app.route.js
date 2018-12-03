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
            templateUrl: 'controllers/home/homeView.html',
            controller: 'homeCtrl'
          }).
          when('/posts', {
            templateUrl: 'controllers/posts/postsView.html',
            controller: 'postsCtrl'
          }).
          when('/comments', {
            templateUrl: 'controllers/comments/commentsView.html',
            controller: 'commentsCtrl'
          }).
          when('/profile', {
            templateUrl: 'controllers/profile/profileView.html',
            controller: 'profileCtrl'
          }).
          when('/postsList/:id', {
            templateUrl: 'controllers/postsList/postsListView.html',
            controller: 'postsListCtrl'
          }).
          when('/commentsList/:id', {
            templateUrl: 'controllers/commentsList/commentsListView.html',
            controller: 'commentsListCtrl'
          }).
        otherwise({redirectTo: '/view1'});
    }
  ]);
'use strict';

angular.
  module('myApp').
  config([
    '$locationProvider', 
    '$routeProvider',
    function config($locationProvider, $routeProvider) {

      //Permite sacar el # de la URLs
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/home', {
            templateUrl: 'controllers/home/homeView.html',
            controller: 'homeCtrl'
          }).
          when('/posts', {
            templateUrl: 'controllers/bootstrapPosts/bootstrapPostsView.html',
            controller: 'bootstrapPostsCtrl'
          }).
          // when('/posts', {
          //   templateUrl: 'controllers/posts/postsView.html',
          //   controller: 'postsCtrl'
          // }).
          // when('/comments', {
          //   templateUrl: 'controllers/comments/commentsView.html',
          //   controller: 'commentsCtrl'
          // }).
          when('/comments', {
            templateUrl: 'controllers/bootstrapComments/bootstrapCommentsView.html',
            controller: 'bootstrapCommentsCtrl'
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
          when('/bootstrapPosts', {
            templateUrl: 'controllers/bootstrapPosts/bootstrapPostsView.html',
            controller: 'bootstrapPostsCtrl'
          }).
          when('/bootstrapComments', {
            templateUrl: 'controllers/bootstrapComments/bootstrapCommentsView.html',
            controller: 'bootstrapCommentsCtrl'
          }).
          when('/bootstrapCommentsList/:id', {
            templateUrl: 'controllers/bootstrapCommentsList/bootstrapCommentsListView.html',
            controller: 'bootstrapCommentsListCtrl'
          }).
        otherwise({redirectTo: '/home'});
         
    }
  ]);
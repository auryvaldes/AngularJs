'use strict';
// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'servicesModule',
    'homeModule', 
    'postsModule',
    'commentsModule',
    'profileModule',
    'postsListModule',
    'commentsListModule',
    'bootstrapPostsModule',
    'bootstrapCommentsModule',
    'bootstrapCommentsListModule',
    'configModule',
    'myApp.version'
]);

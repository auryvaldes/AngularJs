'use strict';
angular.module('bootstrapCommentsListModule', ['ngRoute'])
.controller('bootstrapCommentsListCtrl', function($scope, $routeParams, crudService, config) {
    // variables
   $scope.post;
    $scope.comments;
    $scope.err;
    $scope.urlImg = config.apiUrl + 'assets/images/';
    // $scope.urlImg = $scope.post + 'adadasd' + $scope.err;
 
    // Services - Obtengo informacion de comments
    
    crudService.traePartData($routeParams.id).then(function(resp){
        $scope.post = resp.data;        
    }, function(err){
            $scope.err = err.message;
    });

    crudService.partDataComments($routeParams.id).then(function(resp){
        $scope.comments = resp.data;        
    }, function(err){
            $scope.err = err.message;
    });

});
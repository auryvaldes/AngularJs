'use strict';
angular.module('profileModule', ['ngRoute'])
.controller('profileCtrl', function($scope,crudService) {
    // variables
    $scope.profile;
    $scope.err;
    // Services - Obtengo informacion de posts
    crudService.profileData().then(function(resp){
        $scope.profile = resp.data;
    }, function(err){
            $scope.err = err.message;
    });
});
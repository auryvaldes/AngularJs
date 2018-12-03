'use strict';
angular.module('commentsListModule', ['ngRoute'])
.controller('commentsListCtrl', function($scope, $routeParams, crudService) {
    // variables
    $scope.part;
    $scope.err;
    $scope.showEdit = true;
    $scope.edit;
    // Services - Obtengo informacion de comments
    crudService.partData($routeParams.id).then(function(resp){
        $scope.part = resp.data;
        $scope.edit = resp.data;
    }, function(err){
            $scope.err = err.message;
    });
   
   //Fundiones para edit y save
   $scope.editar = function() {
    this.showEdit = !this.showEdit;
  };
  $scope.guardar = function() {
    crudService.saveComments($scope.edit).then(
      function(resp) {
        $scope.edit = resp.data;
        $scope.editar();
      },
      function(err) {
        $scope.err = err.message;
        $scope.editar();
      }
    );
  };
});
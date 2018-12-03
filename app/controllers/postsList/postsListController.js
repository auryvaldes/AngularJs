"use strict";
angular
  .module("postsListModule", ["ngRoute"])
  .controller("postsListCtrl", function($scope, $routeParams, crudService) {
    // variables
    $scope.parte;
    $scope.err;
    $scope.showEdit = true;
    $scope.edit;
       // Services - Obtengo informacion de posts
    crudService.traePartData($routeParams.id).then(
      function(resp) {
        $scope.parte = resp.data;
        $scope.edit = resp.data;
      
      },
      function(err) {
        $scope.err = err.message;
      }
    );
    //Fundiones para edit y save
    $scope.editar = function() {
      this.showEdit = !this.showEdit;
    };
    $scope.guardar = function() {
      crudService.savePosts($scope.edit).then(
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

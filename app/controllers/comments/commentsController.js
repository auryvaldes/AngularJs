'use strict';
angular.module('commentsModule', ['ngRoute'])
.controller('commentsCtrl', function($scope,$location,crudService) {
    // variables
    $scope.comments;
    $scope.err;
    $scope.selectDelete;
    $scope.showCrear = true;
    $scope.crea;

    // Cuando se ejecute esta funcion me trea la data del backend   
    $scope.viewData = function(){
    crudService.commentsData().then(function(resp){
        $scope.comments = resp.data;
    }, function(err){
            $scope.err = err.message;
    });
}
    //Llamando a la funcion
    $scope.viewData();

    //Me lleva a una nueva pagina( en este caso le estamos enviando una id)
    $scope.readComments = function (id){
        $location.path('/commentsList/'+ id);
    }

    //Esta funcion guarda la id del elemento que queremos eliminar
    $scope.borrarComments = function (id){
        $scope.selectDelete = id;
        }

    //Fundiones para eliminar
    $scope.delete = function() {
        crudService.deletePosts($scope.selectDelete).then(
        function(resp) {
        $scope.viewData();
            
          },
          function(err) {
            $scope.err = err.message;
            $scope.viewData();
        }
        );
      };
        //Fundiones para crear y save
        //Evalua en que momento va a mostrar una u otra pantalla
        $scope.crear = function() {
        this.showCrear = !this.showCrear;
      };
      /** En este caso mi funcion va a recibir la informacion que para este trabajo sera tomada 
      como el cuerpo que es la informacion que estmos solicitando, luego voy a llamar la funcion de
      crear y por ultimo voy a pedir que me traiga de nuevo la informacion el el serv */ 
      $scope.guardar = function() {
        crudService.createComments($scope.crea).then(
          function(resp) {
            $scope.crear();
            $scope.viewData();
          },
          function(err) {
            $scope.err = err.message;
            $scope.crear();
            $scope.viewData();
          }
        );
      };
});
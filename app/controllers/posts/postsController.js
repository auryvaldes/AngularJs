'use strict';
angular.module('postsModule', ['ngRoute'])
.controller('postsCtrl', function($scope, $location, crudService) {
    // variables
    $scope.posts;
    $scope.err;
    $scope.selectDelete;
    $scope.showCrear = true;
    $scope.crea;
    
    // Cuando se ejecute esta funcion me trea la data del backend   
    $scope.viewData = function(){
      crudService.postsData().then(function(resp){
        $scope.posts = resp.data;
        
           }, 
           function(err){
            $scope.err = err.message;
    });
}
    //Llamando a la funcion
    $scope.viewData();

    //Me lleva a una nueva pagina( en este caso le estamos enviando una id)
    $scope.readPost = function (id){
        $location.path('/postsList/'+ id);
    }

    //Esta funcion guarda la id del elemento que queremos eliminar
    $scope.borrarPost = function (id){
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
      crudService.createPosts($scope.crea).then(
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



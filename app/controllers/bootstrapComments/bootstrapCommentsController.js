'use strict';
angular.module('bootstrapCommentsModule', ['ngRoute'])
.controller('bootstrapCommentsCtrl', function($scope, $location, crudService) {
    // variables
    $scope.bootstrapComments;
    $scope.err;
    
    
    // Cuando se ejecute esta funcion me trea la data del backend   
    $scope.viewData = function(){
      crudService.commentsData().then(function(resp){
        $scope.bootstrapComments = resp.data;
        
           }, 
           function(err){
            $scope.err = err.message;
    });
}
    //Llamando a la funcion
    $scope.viewData();

    //Me lleva a una nueva pagina( en este caso le estamos enviando una id)
    $scope.readComments = function (postId){
        $location.path('/commentsList/'+ postId);
    }
});
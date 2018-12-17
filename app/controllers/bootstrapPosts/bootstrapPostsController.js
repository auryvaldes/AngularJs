'use strict';
angular.module('bootstrapPostsModule', ['ngRoute'])
.controller('bootstrapPostsCtrl', function($scope, $location, crudService) {
    // variables
    $scope.bootstrapPosts;
    $scope.err;
    
    
    // Cuando se ejecute esta funcion me trea la data del backend   
    $scope.viewData = function(){
      crudService.postsData().then(function(resp){
        $scope.bootstrapPosts = resp.data;
        
           }, 
           function(err){
            $scope.err = err.message;
    });
}
    //Llamando a la funcion
    $scope.viewData();
    //Me lleva a una nueva pagina( en este caso le estamos enviando una id)
    $scope.readComments = function (id){
        $location.path('/bootstrapCommentsList/'+ id);
    }
});
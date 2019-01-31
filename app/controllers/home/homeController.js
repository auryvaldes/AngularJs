'use strict';
/**
 creamos el modulo definiendole su nombre(recorda que los modulos deben estar tambien en el file de app.module.js)
 agregamos la funcion con su nombre correspondiente y llamamos con ella la funcion creada con el serv
 definimos como queremos que no los muestre que en este caso es a traves de una lista (listMenu)
 e indicamos que podamos tener un mensaje de error
 de igual manera indicamos la funcion que nos dara un retorno de la informacion y un retun de error segun corresponda
 */
angular.module('homeModule', ['ngRoute'])
.controller('homeCtrl', function($scope, crudService) {
    //Variables
    $scope.listMenu;

    crudService.traeAllData().then(function(resp) {
      $scope.listMenu = resp.data;
    });
});


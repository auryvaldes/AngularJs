/**Aca esta el modulo que siempre debe ir y que tambien debe colocarse en app.module.js
en este caso tenemos el nombre del modulo:Services.
Luego tiene una funcion la cual puede tener cualquier nombre en este caso el nombre de Pepe.
despues tenemos una cariable la cual tendra la ruta a donde el serv esta apuntando.
creamos otra funcion en donde vamos a definir cual es la informacion que nos va a retonar
*/
'use strict';
angular.module('servicesModule', [])
.service('crudService', function($http) {
    var url='http://localhost:3000/';

    this.traeAllData = function(){
       return $http.get(url + 'db'); 
    }; 
    this.postsData = function(){
        return $http.get(url + 'posts'); 
     }; 
     this.commentsData = function(){
      return $http.get(url + 'comments'); 
   }; 
   this.profileData = function(){
      return $http.get(url + 'profile'); 
   }; 
   this.traePartData = function(id){
      return $http.get(url + 'posts/'+ id); //colocalos el id fuera de ' para que lo peuda tomar como parametro 
   }; 
   this.partData = function(id){
      return $http.get(url + 'comments/'+ id);  
   }; 
   this.savePosts = function(data){
      return $http.put(url + 'posts/'+ data.id, data);  
   };
   this.saveComments = function(body){
      return $http.put(url + 'comments/'+ body.id, body); 
   }; 
   this.deletePosts = function(id){
      return $http.delete(url + 'posts/'+ id);  
   };
   this.deleteComments = function(id){
      return $http.delete(url + 'comments/'+ id);  
   };
   this.createPosts = function(body){
      return $http.post(url + 'posts/', body);  
   };
   this.createComments = function(body){
      return $http.post(url + 'comments/', body); 
   };
   this.partDataComments = function(id){
      return $http.get(url + 'posts/'+ id+ '/comments/'); 
   };
});


angular.module('menuModule', [])
.controller('menuCtrl', ['$scope', 'crudService', function($scope, crudService) {
    $scope.listMenu;
   
    crudService.traeAllData().then(function(resp){
        $scope.listMenu = resp.data;      
    });
}])

.directive('menu', function() {
    return {
      template: `<!-- Navbar -->
      <nav class="navbar navbar-inverse menu-nav">
        <div class="container-fluid menu-div">
          <ul class="nav navbar-nav nav-list">
            <li><a href="#/app">Home</a></li>
            <li ng-repeat="(key, value) in listMenu">
              <a href="#/app/{{ key }}">{{key}}</a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Navbar-end -->`
    };
  });
angular
  .module("menuModule", [])
  .controller("menuCtrl", ["$scope","crudService",function($scope, crudService) {
      $scope.listMenu;

      crudService.menuData().then(function(resp) {
        $scope.listMenu = resp.data;
      });
    }
  ])

  .directive("menu", function() {
    return {
      templateUrl: 'controllers/menu/menuView.html'
    };
  });

angular
  .module("customsfooterModule", [])
  .controller("customsfooterCtrl", ["$scope","crudService",function($scope, crudService) {
      $scope.footerList;

      crudService.footerData().then(function(resp) {
        $scope.footerList = resp.data;
      });
    }
  ])

  .directive("customsfooter", function() {
    return {
      templateUrl: 'controllers/footer/footerView.html'
    };
  });

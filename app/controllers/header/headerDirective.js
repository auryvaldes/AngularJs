angular
  .module("myheaderModule", [])
  .controller("myheaderCtrl", ["$scope", "crudService", function ($scope, crudService) {

    $scope.settingheader;
  

    crudService.traeAllData().then(function (resp) {
      $scope.settingheader = resp.data;
    });

  }
  ])


  .directive("myheader", ['$location', function (location) {
    path = location.path();
    console.log(path);
    return {
      templateUrl: 'controllers/headerHome/headerHome.html'
    };
  }]);

  // .directive("myheader", ['$location', function (location) {
  //   path = location.path();
  //   console.log();
  //     if (path === '/home') {
  //     return {
  //       templateUrl: 'controllers/headerHome/headerHome.html'
  //     };
  //   }
  //   else {
  //     return {
  //       templateUrl: 'controllers/header/headerView.html'
  //     };
  //   }
  // }]);
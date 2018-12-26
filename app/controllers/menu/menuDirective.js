angular.module('menuModule', [])

.directive('menu', function() {
return{
    template: `ng-include`,
    controller: 'menuCtrl',
    replace: true
}
});
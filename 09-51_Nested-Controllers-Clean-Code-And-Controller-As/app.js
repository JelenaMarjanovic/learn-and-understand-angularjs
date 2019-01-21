// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('parent1Controller', ['$scope', function ($scope) {
  // $scope.message = 'Parent 1 Message!';
  $scope.parent1vm = {};
  $scope.parent1vm.message = 'Parent 1 Message!';
}]);

angularApp.controller('child1Controller', ['$scope', function ($scope) {
  // $scope.message = 'Child 1 Message!';
  $scope.child1vm = {};
  $scope.child1vm.message = 'Child 1 Message!';
}]);

// angularApp.controller('parent2Controller', ['$scope', function ($scope) {
//   $scope.message = 'Parent 2 Message!';
// }]);
//
// angularApp.controller('child2Controller', ['$scope', function ($scope) {
//   $scope.message = 'Child 2 Message!';
// }]);
angularApp.controller('parent2Controller', [function () {
  this.message = 'Parent 2 Message!';
}]);

angularApp.controller('child2Controller', [function () {
  this.message = 'Child 2 Message!';
}]);

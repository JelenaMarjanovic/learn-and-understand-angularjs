var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

  $scope.name = 'Jane Doe';
  $scope.occupation = 'Coder';

  $scope.getName = function() {
    return 'Jane Doe';
  }

  console.log($scope);

});

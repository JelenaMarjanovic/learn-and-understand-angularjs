var myApp = angular.module('myApp', ['ngRoute']);

// myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
//
//   $log.info($location.path());
//
// }]);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  });
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
  $scope.name = 'Second';
}]);

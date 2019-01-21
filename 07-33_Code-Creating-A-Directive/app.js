var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  });
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

}]);

myApp.directive('searchResult', function() {
  return {
    restrict: 'AECM',  // A - attribute, E - element; and AE is by default; C - class, M - comment
    template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
    replace: true
  };
});

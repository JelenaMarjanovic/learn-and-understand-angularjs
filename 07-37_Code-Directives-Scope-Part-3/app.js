var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  });
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $scope.person = {
    name: 'John Doe',
    address: '555 Main St.',
    city: 'New York',
    state: 'NY',
    zip: '11111'
  };

  $scope.formattedAddress = function(person) {
    return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
  };
}]);

myApp.directive('searchResult', function() {
  return {
    restrict: 'AECM',  // A - attribute, E - element; and AE is by default; C - class, M - comment
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      // personName: "@",             // @ - text
      // personAddress: "@"
      personObject: "=",              // = - object
      formattedAddressFunction: "&"   // & - function
    }
  };
});

var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

  console.log($scope);

});

var searchPeople = function($scope, firstName, lastName, height, age, occupation) {
  return 'Jane Doe';
};

console.log(angular.injector().annotate(searchPeople));

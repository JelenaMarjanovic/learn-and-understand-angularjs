var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  $log.info($scope);

}]);

// MINIFICATION

// myApp.controller("mainController",function(n,o){o.info(n)});   // error

// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);

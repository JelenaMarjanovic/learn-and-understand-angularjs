// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.htm',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  })
  .when('/forecast/:days', {
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  });
});

// SERVICES
weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '3';

  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
    {
      callback: 'JSON_CALLBACK'
    },
    {
      get: {
        method: 'JSONP'
      }
    }
  );

  $scope.weatherResult = $scope.weatherAPI.get({
    q: $scope.city,
    cnt: $scope.days,
    APPID:'279b4be6d54c8bf6ea9b12275a567156'
  });

  $scope.convertToFahrenheit = function(degK) {
    return Math.round(1.8 * degK - 459.67);
  };

  $scope.convertToDate = function(dt) {
    return new Date(dt * 1000);
  };
}]);

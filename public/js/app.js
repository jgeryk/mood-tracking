var app = angular.module('mood-tracker', ['ngRoute', 'ngTouch'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl : './templates/landing.html',
        controller: 'landingController'
      })
      .when('/setmood', {
        templateUrl : './templates/plutchik.html',
        controller: 'formController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })

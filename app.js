var app = angular.module('mood-tracker', []);
  .config(function($routeProvider, $locationProvider){
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
  })

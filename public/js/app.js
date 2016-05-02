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
      .when('/calendar', {
        templateUrl : './templates/calendar.html',
        controller: 'calendarController'
      })
      .when('/m/calendar', {
        templateUrl : './templates/m_calendar.html',
        controller: 'calendarController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })

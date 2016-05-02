angular.module('mood-tracker')
  .controller('calendarController', function($scope, $location, $timeout, $interval) {

    var overflow = document.getElementById('overflow_container');
    var position = 20;
    var initial;

    $interval(function() {
      $scope.position = {
        'margin-top': position+"px"
      };
    }, 5);

    overflow.addEventListener('touchstart', function(event) {
      initial = event.targetTouches[0].clientY;
    }, false);

    overflow.addEventListener('touchmove', function(event) {
      var touch = event.targetTouches[0];
      position -= initial-touch.clientY;
      initial = touch.clientY;
      var maxH = -window.innerHeight * 0.28;
      if (position > 0) position = 20;
      if (position < maxH) position = maxH;
    
    }, false);

    $scope.go = function () {
      $location.path('/');
    }
  });

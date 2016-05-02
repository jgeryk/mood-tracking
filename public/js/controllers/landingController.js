angular.module('mood-tracker')
  .controller('landingController', function($scope, $location, $timeout, $interval) {
    $scope.monGrad = {
      'display': 'block',
      'background': '-webkit-linear-gradient(left, #BF0000, #FF0000, #BFBF00, #FFFF00)'
    }

    $scope.tueGrad = {
      'display': 'block',
      'background': '-webkit-linear-gradient(left, #5F865F, #8CC68C, #3FBF3F, #54FF54)'
    }

    $scope.wedGrad = {
      'display': 'block',
      'background': '-webkit-linear-gradient(left, #BFBF3F, #FFFF54, #3FBF3F, #54FF54)'
    }

    $scope.thuGrad = {
      'display': 'block',
      'background': '-webkit-linear-gradient(left, #92BF00, #C3FF00)'
    }

    $scope.friGrad = {
      'display': 'none'
    }

    $scope.satGrad = {
      'display': 'none'
    }

    $scope.sunGrad = {
      'display': 'none'
    }

    $scope.href = function (path) {
      $location.path(path);
    }

    var position = 5;
    var mouseDown;
    var start = false;
    var getMousePos = undefined;
    var initial;

    $scope.startDrag = function (event) {
      if (angular.isDefined(getMousePos)) return;
      start = true;
      initial = event.clientX;
      $scope.condHide = {
        'display': 'none'
      }
    }

    $scope.move = function(event) {
      if (start) {
        position += initial-event.clientX;
        initial = event.clientX;
        if (position < 5) position = 5;

        var vmax = Math.max(window.innerWidth, window.innerHeight);
        var maxPosition = vmax - 0.09*vmax - window.innerWidth*0.04 - 6;

        if (position > maxPosition) position = maxPosition; 

        $scope.position = {
          'margin-right': position+"px"
        }
        
        if (position === maxPosition) {
          start = false;
          $timeout(function () {$location.path('/setmood'); }, 150);
        }
      }
    }

    $scope.stopDrag = function() {
      start = false;
      var vmax = Math.max(window.innerWidth, window.innerHeight);
      var maxPosition = vmax - 0.09*vmax - window.innerWidth*0.04 - 6;
      position = (position < (maxPosition - 0.09*vmax)) ? 5 : maxPosition;
      $scope.position = { 
        'margin-right': position+"px"
      }
      if (position === maxPosition) {
        start = false;
        $timeout(function () {$location.path('/setmood'); }, 150);
      }

      $scope.condHide = {}
    };

    $scope.go = function(path) {
	  if (window.innerWidth > 1000) {
	    $location.path(path);
	  } else {
	    $location.path('/m'+path);
	  }
    }

    var d = document.getElementById('setMoodView');
    $interval(function () {
      $scope.position = { 
        'margin-right': position+"px"
      };
    }, 5);

    d.addEventListener('touchstart', function(event) {
      initial = event.targetTouches[0].clientX;
      $scope.condHide = {
        'display': 'none'
      }
    }, false);

    d.addEventListener('touchend', function(event) {
      initial = undefined;
      var vmax = Math.max(window.innerWidth, window.innerHeight);
      var maxPosition = window.innerWidth - 0.09*vmax - window.innerWidth*0.04 - 6;
      position = (position < (maxPosition - 0.09*vmax)) ? 5 : maxPosition;
      $scope.position = { 
        'margin-right': position+"px"
      }
      
      if (position === maxPosition) {
        $timeout(function () {$location.path('/setmood'); }, 150);
      }

      $scope.condHide = {}
    }, false);

    d.addEventListener('touchmove', function(event) {
      var touch = event.targetTouches[0];
      position += initial-touch.clientX;
      initial = touch.clientX;
      if (position < 5) position = 5;

      var vmax = Math.max(window.innerWidth, window.innerHeight);
      var maxPosition = window.innerWidth - 0.09*vmax - window.innerWidth*0.04 - 6;
      if (position > maxPosition) position = maxPosition; 

      $scope.position = {
        'margin-right': position+"px"
      }

      if (position === maxPosition) {
        $timeout(function () {$location.path('/setmood'); }, 150);
      }
    }, false);
  });

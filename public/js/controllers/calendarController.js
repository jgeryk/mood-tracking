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

    if (overflow !== null) {
      overflow.addEventListener('touchstart', function(event) {
        initial = event.targetTouches[0].clientY;
      }, false);

      overflow.addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];
        position -= initial-touch.clientY;
        initial = touch.clientY;
        var maxH = -window.innerHeight * 0.31;
        if (position > 0) position = 20;
        if (position < maxH) position = maxH;
    
      }, false);
    }

    $scope.go = function () {
      $location.path('/');
    }

    $scope.expand = function (event) {
      //$scope.hide = {
        //'display' : 'none'
      //}
      //console.log(event);
    }
    
    $(document).ready(function() {
      $('img').click(function(e) {
        var offset = $(this).offset();
        var height = $(this).context.clientHeight;
        var width = $(this).context.clientWidth;

        console.log($(this));
        // Get the offset relative to the image
        var vNum = Math.floor((e.pageY-offset.top) / (height/7));
        var vOff = height/7.8 + (vNum-1)*height/6.9;
        var hNum = Math.floor((e.pageX-offset.left) / (width/7));

        $scope.highlight = {
          'display': 'block',
          'width': width/7+2,
          'height': height/7+3,
          'top': offset.top + vOff,
          'left': offset.left + width/7*hNum,
          'z-index' : 1
        }
      });
    });
  });

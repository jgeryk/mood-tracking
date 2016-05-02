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

    var months = [
      'january', 'february', 'march', 
      'april'  , 'may'     , 'june', 
      'july'   , 'august'  , 'september', 
      'october', 'november', 'december'
    ]

    var currentlyExpanded;
    $scope.expand = function (event) {
      $scope.hide = {
        'display' : 'none'
      }
      var expandThat = document.getElementsByClassName('expanded_calendar');
      currentlyExpanded = passUp.context.id;
      expandThat.namedItem(passUp.context.id).style.display = "";
      expandThat = document.getElementsByClassName('navigation_arrow');
      for (var i = 0; i < expandThat.length; i++) {
        expandThat.item(i).style.display="";
      }
    }
    
    // The JQuery code is executed first
    var passUp;
    $(document).ready(function() {
      $('img').click(function(e) {
        if (months.indexOf($(this).context.id) !== -1)
          passUp = $(this);
        var offset = $(this).offset();
        var height = $(this).context.clientHeight;
        var width  = $(this).context.clientWidth;

        // Get the offset relative to the image
        var vNum = Math.floor((e.pageY-offset.top) / (height/7));
        var vOff = height/7.8 + (vNum-1)*height/6.9;
        var hNum = Math.floor((e.pageX-offset.left) / (width/7));

        if ($(this).context.className.includes("expanded_")) {
          var newDiv = document.createElement("div");
          var newMarker = document.createElement("img");
          newDiv.style.display = 'block'
          newDiv.style.width   = width/7+2;
          newDiv.style.height  = height/7+3;
          newDiv.style.top     = offset.top + vOff;
          newDiv.style.left    = offset.left + width/7 * hNum;
          newDiv.style.position = 'absolute';
          newDiv.id = $(this).context.id;
          newDiv.addEventListener('click', function () {
            document.getElementsByTagName('body')[0].removeChild(this);
          });

          newMarker.src="icons/marker.png";
          newMarker.style.width = '50%';
          newMarker.style.margin = '10% 24%';

          newDiv.appendChild(newMarker);
          document.getElementsByTagName('body')[0].appendChild(newDiv);
        }
        
        if ($(this).context.id === "right") {

          var expandThat = document.getElementsByClassName('expanded_calendar');
          expandThat.namedItem(currentlyExpanded).style.display = "none";
          var nextMonth = (months.indexOf(currentlyExpanded) < 11) ? months.indexOf(currentlyExpanded)+1 : 0;
          expandThat.namedItem(months[nextMonth]).style.display="";
          currentlyExpanded = months[nextMonth];

        } else if ($(this).context.id === "left") {

          var expandThat = document.getElementsByClassName('expanded_calendar');
          expandThat.namedItem(currentlyExpanded).style.display = "none";
          var nextMonth = (months.indexOf(currentlyExpanded) > 0) ? months.indexOf(currentlyExpanded)-1 : 11;
          expandThat.namedItem(months[nextMonth]).style.display="";
          currentlyExpanded = months[nextMonth];

        }
      });
    });
  });

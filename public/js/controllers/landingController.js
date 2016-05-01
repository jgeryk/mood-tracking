angular.module('mood-tracker')
  .controller('landingController', function($scope) {
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
      'display': 'none'
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
  });

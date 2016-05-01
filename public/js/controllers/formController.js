angular.module('mood-tracker')
    .controller('formController', function($scope){
      $scope.showFreeWrite = false;
      $scope.showQuestions = false;
      $scope.mostRecentColor = "";
      $scope.selectedMood = {
        title: 'Primary Mood',
        mood: "",
        color: ""
      }
      $scope.selectedMood2 = {
        title: 'Secondary Mood',
        mood: "",
        color: ""
      }
      $scope.selectedMood3 = {
        title: 'Tertiary Mood',
        mood: "",
        color: ""
      }
      $scope.moodToChoose = $scope.selectedMood;


      $scope.toggleFreeWrite = function(){
        $scope.showFreeWrite = !$scope.showFreeWrite;
      }

      $scope.toggleQuestions = function(){
        $scope.showQuestions = !$scope.showQuestions;
      }

      $scope.moodChart = {
          'rgb(255, 255, 177)'    : 'serenity',
          "rgb(255, 255, 84)"     : 'joy',
          "rgb(255, 232, 84)"     : 'ecstasy',
          "rgb(140, 255, 140)"    : 'acceptance',
          "rgb(84, 255, 84)"      : 'trust',
          "rgb(0, 180, 0)"        : 'admiration',
          "rgb(140, 198, 140)"    : 'apprehension',
          "rgb(0, 150, 0)"        : 'fear',
          "rgb(0, 128, 0)"        : 'terror',
          "rgb(165, 219, 255)"    : 'distraction',
          "rgb(89, 189, 255)"     : 'surprise',
          "rgb(0, 137, 224)"      : 'amazement',
          "rgb(140, 140, 255)"    : 'pensiveness',
          "rgb(81, 81, 255)"      : 'sadness',
          "rgb(0, 0, 200)"        : 'grief',
          "rgb(255, 198, 255)"    : 'boredom',
          "rgb(255, 84, 255)"     : 'disgust',
          "rgb(222, 0, 222)"      : 'loathing',
          "rgb(255, 140, 140)"    : 'annoyance',
          "rgb(255, 0, 0)"        : 'anger',
          "rgb(212, 0, 0)"        : 'rage',
          "rgb(255, 196, 140)"    : 'interest',
          "rgb(255, 168, 84)"     : 'anticipation',
          "rgb(255, 125, 0)"      : 'vigilance'
      }
      $scope.color = "rgb(140, 255, 140)"

      $scope.selectColor = function(order){
        switch(order){
          case 1:
            $scope.moodToChoose = $scope.selectedMood;
            break;
          case 2:
            $scope.moodToChoose = $scope.selectedMood2;
            break;
          case 3:
            $scope.moodToChoose = $scope.selectedMood3;
            break;
        }
      }

      $scope.selectMood = function(e){
          if(e.target.style.fill){
            var rgbColor = e.target.style.fill
            if($scope.moodChart[rgbColor]){
              $scope.mostRecentColor = rgbColor;
              $scope.moodToChoose.color = rgbColor;
              $scope.moodToChoose.mood = $scope.moodChart[rgbColor];
            }
          }
           if(!$scope.selectedMood3.color && $scope.selectedMood.color){
            $scope.moodToChoose = $scope.selectedMood2.color ? $scope.selectedMood3 : $scope.selectedMood2;
          }
          if($scope.selectedMood3.color){
           $scope.moodToChoose = '';
         }
      }

    });

'use strict';

angular.module('ccmApp') 
  .directive('encounterTimerWidget', function($document) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      transclude: true,
      templateUrl: 'templates/encounterTimerWidget.html',
      controller: controller,
      link: link
    };

    function controller($scope, $element) {
      $scope.time = '00:00';
      $scope.clicked = false;
      $scope.timer = function() {
        $scope.clicked = (!$scope.clicked);
        console.log('click', $scope.clicked);
      }
    }

    function link(scope, element, attrs) {
    }
  });

'use strict';

angular.module('ccmApp') 
  .directive('encounterHeaderWidget', function() {
    return {
      restrict: 'E',
      scope: {
        patient: '=',
        timer: '='
      },
      templateUrl: 'templates/encounterHeaderWidget.html',
      link: link
    };

    function link(scope, element, attrs) {
      scope.enrolled = 0;
    }
  });

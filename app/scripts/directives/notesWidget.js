'use strict';

angular.module('ccmApp') 
  .directive('notesWidget', function() {
    return {
      restrict: 'E',
      scope: {
        data: '@'
      },
      template: '<i class="fa fa-pencil-square-o" aria=hidden="true"></i>',
      link: link
    };

    function link(scope, element, attrs) {
    }
  });

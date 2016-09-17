'use strict';

angular.module('ccmApp') 
  .directive('encounterTypeWidget', function() {
    return {
      restrict: 'E',
      scope: {
        data: '@'
      },
      template: '<i aria=hidden="true"></i>',
      link: link
    };

    function link(scope, element, attrs) {
      var c = '';
 
      switch (scope.data) {
        case 'phone':
          c = 'fa fa-phone';
          break;
        case 'email':
          c = 'fa fa-envelope';
          break;
        case 'in-person':
          c = 'fa fa-user';
          break;
      }

      element.addClass(c); 
    }
  });

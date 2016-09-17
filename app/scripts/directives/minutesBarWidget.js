'use strict';

angular.module('ccmApp') 
  .directive('minutesBarWidget', function() {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/minutesBarWidget.html',
      link: link
    };

    function link(scope, element, attrs) {
      var minutes = scope.data.minutesTracked;
      var bar = element.find('.bar'); 
      var barWidth = parseInt(bar.css('width'));
      var ratio = minutes/20; 
      if (ratio > 1) {
        ratio = 1;
      }

      var color = 'firebrick';
      if (ratio === 1) {
        color = 'green';
      } else if (ratio > .75) {
        color = '#fb0';
      } else if (ratio > .5) {
        color = 'darkorange';
      } 

      var w = ratio * barWidth;
      if (w < 20) {
        w = 20;
      }

      //bar.css('width', (w) ? w + 'px' : 20 + 'px');
      bar.css('width', w + 'px');
      bar.css('background-color', color);
      console.log('minutesBarWidget', ratio, barWidth, minutes); 
    }
  });

'use strict';

angular.module('ccmApp') 
  .directive('timerDonutWidget', function($document) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      transclude: true,
      templateUrl: 'templates/timerDonutWidget.html',
      link: link
    };

    function link(scope, element, attrs) {
      function renderChart() {
        c3.generate({
          bindto: element.find('.timerDonut').get(0),
          data: {
            columns: scope.data.colData,
            type : 'donut',
            //onclick: function (d, i) { console.log("onclick", d, i); },
            //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
/*
          size: {
            width: 185,
            height: 185
          },
*/
          donut: {
            title: scope.data.title
          },
          legend: {
            show: false
          }
        });
      }

      if (element.get(0).offsetParent) {  // check if it's not hidden
        renderChart();
      } else {
        // wait for bs animation to finish to get real div width
        $document.on('shown.bs.tab', function(e) {
          //console.log('donut shown.bs.tab', e.target);
          renderChart();
        });
      }
    }
  });

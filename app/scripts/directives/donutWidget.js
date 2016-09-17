'use strict';

angular.module('ccmApp') 
  .directive('donutWidget', function($document) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/donutWidget.html',
      link: link
    };

    function link(scope, element, attrs) {
      //console.log('donutWidget', scope.data, element.get(0)); 

      function renderChart() {
        c3.generate({
          bindto: element.find('.donut').get(0),
          data: {
            columns: scope.data.colData,
            type : 'donut',
            //onclick: function (d, i) { console.log("onclick", d, i); },
            //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
            title: scope.data.title
          },
          legend: {
            position: 'right'
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

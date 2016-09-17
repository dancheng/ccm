'use strict';

angular.module('ccmApp') 
  .directive('barWidget', function($document) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/barWidget.html',
      link: link
    };

    function link(scope, element, attrs) {
      //console.log('barWidget', scope.data, element.get(0)); 
      function renderChart() {
        c3.generate({
          bindto: element.find('.bar').get(0),
          data: {
            columns: scope.data.colData,
            type : 'bar',
            //onclick: function (d, i) { console.log("onclick", d, i); },
            //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
        });
      }

      if (element.get(0).offsetParent) {
        renderChart();
      } else {
        $document.on('shown.bs.tab', function(e) {
          //console.log('bar shown.bs.tab', e.target);
          renderChart();
        });
      }
    }
  });

'use strict';

angular.module('ccmApp') 
  .directive('pieWidget', function($document) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/pieWidget.html',
      link: link
    };

    function link(scope, element, attrs) {
      //console.log('pieWidget', scope.data, element.get(0)); 

      function renderChart() {
        c3.generate({
          bindto: element.find('.pie').get(0),
          data: {
            columns: scope.data.colData,
            type : 'pie',
            //onclick: function (d, i) { console.log("onclick", d, i); },
            //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          legend: {
            position: 'right'
          }
        });
      }

      if (element.get(0).offsetParent) {
        renderChart();
      } else {
        $document.on('shown.bs.tab', function(e) {
          //console.log('pie shown.bs.tab', e.target);
          renderChart();
        });
      }
    }
  });

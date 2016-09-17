(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ccmApp.controller:DashboardCtrl
   * @description
   * # DashboardCtrl
   * Controller of the ccmApp
   */
  angular.module('ccmApp')
    .controller('DashboardCtrl', function ($scope) {
      $scope.locations = [
        { id: 0, name: 'All Locations' },
        { id: 2, name: 'Scripps, Chula Vista' },
        { id: 1, name: 'Scripps, La Jolla' },
        { id: 3, name: 'Scripps, San Diego' }
      ];
      $scope.location = $scope.locations[0];

      // enrolled data
      $scope.enrolled = {
        // donut data
        donut: {
          title: '430 Total',
          colData: [
            ['0-4 Min', 10],
            ['5-9 Min', 25],
            ['10-14 Min', 25],
            ['15-19 Min', 25],
            ['20+ Min', 15]
          ]
        },

        // pie data
        pie: {
          colData: [
            ['No or Only Invalid Dx', 12],
            ['Healthy Users', 13],
            ['Low', 13],
            ['Moderate', 12],
            ['High', 12],
            ['Very High', 38]
          ]
        },

        // bar data
        bar: {
          colData: [
            ['Smith, J', 20],
            ['Willaims, M.', 65],
            ['Jones, H', 21],
            ['Smith, J', 50],
            ['Doe, J.', 53],
            ['Powers, A.', 22],
            ['Cheng, D.', 25],
            ['Alesi, N.', 73],
            ['Dastigar, T.', 95],
            ['Smith, E.', 73]
          ]
        }
      };

      $scope.eligible = {
        // donut data
        donut: {
          title: '1012 Total',
          colData: [
            ['Enrolled', 25],
            ['Declined', 25],
            ['Not Contacted', 25],
            ['Unable to Contact', 15]
          ]
        },

        // pie data
        pie: {
          colData: [
            ['No or Only Invalid Dx', 12],
            ['Healthy Users', 13],
            ['Low', 13],
            ['Moderate', 12],
            ['High', 12],
            ['Very High', 38]
          ]
        },

        // bar data
        bar: {
          colData: [
            ['Smith, J', 20],
            ['Willaims, M.', 65],
            ['Jones, H', 21],
            ['Smith, J', 50],
            ['Doe, J.', 53],
            ['Powers, A.', 22],
            ['Cheng, D.', 25],
            ['Alesi, N.', 73],
            ['Dastigar, T.', 95],
            ['Smith, E.', 73]
          ]
        }
      };

      $scope.users = {
        // bar data
        bar: {
          colData: [
            ['Smith, J', 20],
            ['Willaims, M.', 65],
            ['Jones, H', 21],
            ['Smith, J', 50],
            ['Doe, J.', 53],
            ['Powers, A.', 22],
            ['Cheng, D.', 25],
            ['Alesi, N.', 73],
            ['Dastigar, T.', 95],
            ['Smith, E.', 73]
          ]
        }
      };

      $scope.click = function($event) {
        var el = $event.currentTarget;
        $event.preventDefault();
        angular.element(el).tab('show');
        //console.log('click', eventId, el);
      };
    });

})();

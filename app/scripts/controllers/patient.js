(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ccmApp.controller:patientCtrl
   * @description
   * # patientCtrl
   * Controller of the ccmApp
   */
  angular.module('ccmApp')
    .controller('patientCtrl', function ($scope, $routeParams, PatientsSvc, EncountersSvc, ConstantsSvc) {

      PatientsSvc.getData()
      .then(function(response) {
        var id = $routeParams.patientId;
        $scope.patient = _.find(response.data.patients, {'id': id });

        console.log('patient', $scope.patient);

        $scope.encounters = EncountersSvc.getEncounters(id).then(function(data) {
          $scope.encounters = data.encounters;
          $scope.totalDuration = 0;

          _.map($scope.encounters, function(x) {
            ConstantsSvc.getProblem(+x.problemId).then(function(data) {;
              x.problem = data;
            });

            $scope.totalDuration += x.duration;
          });

          console.log('$scope.encounters', $scope.encounters);
        });

      }, function(response) {
        console.log('failed', data);
      });

      // calendar
      $scope.calendarView = 'month';
      $scope.calendarDate = new Date();

      $scope.timer = {
        // donut data
        donut: {
          title: '14 min',
          colData: [
            ['elapsed', 14],
            ['remaining', 6]
          ]
        }
      };

      $scope.click = function($event) {
        var el = $event.currentTarget;
        $event.preventDefault();
        angular.element(el).tab('show');
      };

      $scope.addEvent = function(encounterType, $event) {
        console.log('addEvent', encounterType, $event);
        //angular.element('#addEncounterModal').modal('hide');

        if (encounterType === 'email') {
          angular.element('#addEmailEncounterModal').modal('show');
        } else if (encounterType === 'phone') {
          angular.element('#addPhoneEncounterModal').modal('show');
        } else if (encounterType === 'inPerson') {
          angular.element('#addInPersonEncounterModal').modal('show');
        }
      }

      console.log('routeParams', $routeParams.patientId);
    });

})();

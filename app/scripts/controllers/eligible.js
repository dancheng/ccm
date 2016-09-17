(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ccmApp.controller:EligibleCtrl
   * @description
   * # EligibileCtrl
   * Controller of the ccmApp
   */
  angular.module('ccmApp')
    .controller('EligibleCtrl', function ($scope, PatientsSvc) {
      PatientsSvc.getData()
      .then(function(response) {
        $scope.data = response.data.patients;
        console.log('data', $scope.data);
      }, function(response) {
        console.log('failed', data);
      });
    });

})();

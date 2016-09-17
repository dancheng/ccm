(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ccmApp.controller:CareManagementCtrl
   * @description
   * # CareManagementCtrl
   * Controller of the ccmApp
   */
  angular.module('ccmApp')
    .controller('CareManagementCtrl', function ($scope, PatientsSvc) {
      PatientsSvc.getData()
      .then(function(response) {
        $scope.data = response.data.patients;
        console.log('data', $scope.data);
      }, function(response) {
        console.log('failed', data);
      });
    });

})();

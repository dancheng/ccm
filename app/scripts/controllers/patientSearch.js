(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ccmApp.controller:PatientSearchCtrl
   * @description
   * # PatientSearchCtrl
   * Controller of the ccmApp
   */
  angular.module('ccmApp')
    .controller('PatientSearchCtrl', function ($scope, $http, config) {
      $scope.data = [
        { 'first': 'John', 'last': 'Smith', 'age': 72, 'sex': 'M', 'id': '5671230', 'chronic': 4, 'location': 'Scripps, La Jolla', 'physician': 'Williams', 'lastVisit': '3/01/16', 'status': 'Enrolled' },
        { 'first': 'Annie', 'last': 'Hall', 'age': 68, 'sex': 'F', 'id': '8273403', 'chronic': 2, 'location':  'Scripps, San Diego', 'physician': 'Doe', 'lastVisit': '3/02/16', 'status': 'Declined'}
      ];
    });

})();

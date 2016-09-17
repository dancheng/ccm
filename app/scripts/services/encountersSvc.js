'use strict';

angular.module('ccmApp').factory('EncountersSvc', function($http) {
  var service = {
    getEncounters: getEncounters
  };

  function getEncounters(patientId) {
    var url = 'data/encounters.json';
    return $http({url: url, method: 'GET', cache: true}).then(function(response) {
      return _.find(response.data.encounters, { 'id': patientId });
    });
  }
  
  return service;
});

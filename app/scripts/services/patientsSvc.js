'use strict';

angular.module('ccmApp').factory('PatientsSvc', function($http) {

  var service = {
    getData: getData
  };

  function getData() {
    var url = 'data/patients.json';
    return $http({url: url, method: 'GET', cache: true});
  }

  return service;
});

'use strict';

angular.module('ccmApp').factory('ConstantsSvc', function($http) {
  var promise;
  var service = {
    getProblem: getProblem
  };

  function getData() {
    var url = 'data/constants.json';

    if (!promise) {
      // cache promise
      promise = $http({url: url, method: 'GET', cache: true}).then(function(response) {
        return response.data;
      });
    } 

    return promise;
  }
  
  function getProblem(problemId) {
    return getData().then(function(data) {
      var p = _.find(data.problems, { 'id': problemId });
      return (p) ? p.name : '-';
    });
  }
  
  return service;
});

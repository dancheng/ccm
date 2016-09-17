(function() {
  'use strict';

  angular.module('ccmApp')
    .controller('AppCtrl', function ($rootScope, $scope) {
      $scope.loading = false;

/*
      $rootScope.$on('LOAD', function() {
        $scope.loading = true;
      });

      $rootScope.$on('LOAD_COMPLETE', function() {
        $scope.loading = false;
      });
*/

    });

})();

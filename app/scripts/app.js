'use strict';

/**
 * @ngdoc overview
 * @name ccmApp
 * @description
 * # ccmApp
 *
 * Main module of the application.
 */
var app = angular
  .module('ccmApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mwl.calendar',
    'ui.bootstrap',
    'angucomplete-alt',
    'datetimepicker',
    'toggle-switch',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/eligible', {
        templateUrl: 'views/eligible.html',
        controller: 'EligibleCtrl',
        controllerAs: 'eligible'
      })
      .when('/careManagement', {
        templateUrl: 'views/careManagement.html',
        controller: 'CareManagementCtrl',
        controllerAs: 'care'
      })
      .when('/patient/:patientId', {
        templateUrl: 'views/patient.html',
        controller: 'patientCtrl',
        controllerAs: 'patient'
      })
      .when('/patientSearch', {
        templateUrl: 'views/patientSearch.html',
        controller: 'PatientSearchCtrl',
        controllerAs: 'search'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'info'
      })
      .when('/alerts', {
        templateUrl: 'views/alerts.html',
        controller: 'AlertsCtrl',
        controllerAs: 'alerts'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        controllerAs: 'help'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeStart', function(angularEvent, next, current) {
console.log('$routeChangeStart');
  });

  $rootScope.$on('$routeChangeSuccess', function(angularEvent, next, current) {
console.log('$routeChangeSuccess');
  });

}]);


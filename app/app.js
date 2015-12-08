'use strict';

/**
 * @ngdoc overview
 * @name yeomanAppApp
 * @description
 * # yeomanAppApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/span', {
        templateUrl: 'views/span.html',
        controller: 'SpanctrlCtrl',
        controllerAs: 'span'
      })
      .when('/routeView', {
        templateUrl: 'views/routeview.html',
        controller: 'RouteviewCtrl',
        controllerAs: 'routeView'
      })
      .when('/payrollService', {
        templateUrl: 'views/payrollservice.html',
        controller: 'PayrollserviceCtrl',
        controllerAs: 'payrollService'
      })
      .when('/addMovie', {
        templateUrl: 'views/addmovie.html',
        controller: 'AddmovieCtrl',
        controllerAs: 'addMovie'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

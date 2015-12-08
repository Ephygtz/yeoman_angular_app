'use strict';

/**
 * @ngdoc function
 * @name yeomanAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAppApp
 */
angular.module('yeomanAppApp')
  .controller('MainCtrl', function ($scope, myFactory) {

        $scope.movies =   myFactory.query();

  });

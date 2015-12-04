'use strict';

/**
 * @ngdoc function
 * @name yeomanAppApp.controller:PayrollserviceCtrl
 * @description
 * # PayrollserviceCtrl
 * Controller of the yeomanAppApp
 */
angular.module('yeomanAppApp')
  .controller('PayrollserviceCtrl', function ($scope, payrollCalcService) {
    //first we create a service
    //Then we inject the service payrollCalcService
    $scope.answer = payrollCalcService.staffPayroll(12000, 15000, 2000, 4000);
    // $scope.answer2 = payrollCalcService.partnersPayroll(5000000, 8000);

  });

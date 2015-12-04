'use strict';

/**
 * @ngdoc service
 * @name yeomanAppApp.payrollCalcService
 * @description
 * # payrollCalcService
 * Service in the yeomanAppApp.
 */
angular.module('yeomanAppApp')
  .service('payrollCalcService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.staffPayroll = function(basicSal, allowances, tax, nssf) {
      var netpay = (basicSal + allowances) - (tax + nssf);
      if (netpay > 20000) {
        return "Your pay is KES" + netpay + " <br /> Come receive an award";
      } else {
        return netpay + "Work harder";
      } //end the first method

    this.partnersPayroll = function(serviceFee, tax) {
      var bonusTotal = serviceFee - tax;
      return bonusTotal + " We appreciate your input in our growth";
    };

    };
  });

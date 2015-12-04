'use strict';

/**
 * @ngdoc service
 * @name yeomanAppApp.payrollFactory
 * @description
 * # payrollFactory
 * Factory in the yeomanAppApp.
 */
angular.module('yeomanAppApp')
  .factory('payrollFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

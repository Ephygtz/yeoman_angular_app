'use strict';

/**
 * @ngdoc service
 * @name yeomanAppApp.myFactory
 * @description
 * # myFactory
 * Factory in the yeomanAppApp.
 */
angular.module('yeomanAppApp')
  .factory('myFactory', function ($resource) {
    return $resource("http://127.0.0.1:8081/movies/:_id");
  });

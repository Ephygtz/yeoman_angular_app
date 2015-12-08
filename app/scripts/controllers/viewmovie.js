'use strict';

/**
 * @ngdoc function
 * @name yeomanAppApp.controller:ViewmovieCtrl
 * @description
 * # ViewmovieCtrl
 * Controller of the yeomanAppApp
 */
angular.module('yeomanAppApp')
  .controller('ViewmovieCtrl', function ($scope, $routeParams, myFactory) {
      $scope.movieId = $routeParams._id;
      myFactory.get({ _id: $scope.movieId}, function(response) {
        $scope.movieDetail = response;
      });
  });

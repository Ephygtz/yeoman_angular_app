'use strict';

/**
 * @ngdoc function
 * @name yeomanAppApp.controller:AddmovieCtrl
 * @description
 * # AddmovieCtrl
 * Controller of the yeomanAppApp
 */
angular.module('yeomanAppApp')
  .controller('AddmovieCtrl', function ($scope, myFactory) {
    $scope.movie = new myFactory();
    $scope.saveMovie = function() {
        //Create a new resource using your 'movie' object
        console.log($scope.movie);
        // This will pass a post to your api
        $scope.movie.$save(function() {
          console.log("OK");
        });
    };


  });

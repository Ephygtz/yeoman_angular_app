'use strict';

/**
 * @ngdoc function
 * @name yeomanAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanAppApp
 */
angular.module('yeomanAppApp')
  .controller('AboutCtrl', function ($scope, $http) {
    var url = "http://jsonplaceholder.typicode.com/posts/1/comments";

	$http.get(url).success(function(response){
		$scope.posts = response;
	})

  });

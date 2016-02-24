var myApp = angular.module('myApp', [])

.controller('FirstCtrl', function($scope){
	$scope.data = {message: "Hello"};
})

.controller('SecondCtrl', function($scope){
	$scope.data = {message: "Hello"};
})
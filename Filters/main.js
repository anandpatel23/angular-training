var myApp = angular.module('myApp', [])

.factory('Data', function(){
	return {message: "I'm a data from a service"}
})

.filter('reverse', function(){
	return function(text){
		return text.split("").reverse().join("");
	}
})

.controller('FirstCtrl', function($scope, Data){
	$scope.data = Data;
})

.controller('SecondCtrl', function($scope, Data){
	$scope.data = Data;
})
var myApp = angular.module('myApp', [])

.factory('Data', function(){
	return {message: "I'm a data from a service"}
})

.controller('FirstCtrl', function($scope, Data){
	$scope.data = Data;
})

.controller('SecondCtrl', function($scope, Data){
	$scope.data = Data;

	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
	}
})
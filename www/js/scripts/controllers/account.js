'use strict';

app.controller('AccountController', function($scope, $location, Auth, toaster){

	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

	$scope.logout = function() {
		Auth.logout();
		toaster.pop('success',"Succesfully logged out.");
		$location.path('/');
	};
	
});
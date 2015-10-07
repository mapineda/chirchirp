//chirApp.js
var app = angular.module('chirApp', []);


app.controller('mainController',function(){
	$scope.posts = [];
	$scope.newPost = {created_by: '', text: '', created_at: ''};

	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.post.push($scope.newPost);
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};
});


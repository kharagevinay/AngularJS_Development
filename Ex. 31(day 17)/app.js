var app = angular.module("myApp",[]);

app.service("LoginService",function()
	{
		this.isValidUser = function(s1,s2)
		{
			var str="";
			if(s1 == "admin" && s2 == "admin123")
			{
				str = "Welcome to Admin";
			}
			else
			{
				str = "Invalid Username or Password...!";
			}
			return str;
		};
	});

app.controller("democontroller",function($scope,LoginService)
	{
		$scope.uname="";
		$scope.pwd="";
		$scope.result="";

		$scope.f2 = function()
		{
			$scope.result = LoginService.isValidUser($scope.uname,$scope.pwd)	
		};
	});
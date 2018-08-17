var app = angular.module("myApp",[]);

app.factory("LoginService",function()
	{
		var FactObj ={};
		FactObj.isValidUser = function(uname,pwd)
			{
				var str="";
				if(uname == "admin" && pwd == "admin123")
				{
					str = "Welcome to Admin";
				}
				else
				{
					str = "Invalid Username or Password...!";
				}	
				return str;			
			};
			return FactObj;		
	});

	app.controller("democontroller",function($scope,LoginService)
	{
		$scope.uname="";
		$scope.pwd="";
		$scope.result="";

		$scope.f2 = function()
		{
			$scope.result = LoginService.isValidUser($scope.uname,$scope.pwd);	
		};
	});
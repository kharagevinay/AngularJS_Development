var app = angular.module("myApp",[]);

app.factory("mathService",function()
	{
		var obj={};
		this.math = function(price,quantity)
		{
			var str="";
			str = price * quantity;
			return str;
		}
		return obj;				
	});

	app.controller("democontroller",function($scope,mathService)
	{
		$scope.pname="";
		$scope.price="";
		$scope.quantity="";
		$scope.result="";

		$scope.f2 = function()
		{
			$scope.result = mathService.math($scope.price,$scope.quantity);	
		};
	});
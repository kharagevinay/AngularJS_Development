var app=angular.module("myApp",[]);
app.filter("demofilter",function()
	{
		var fn=function (input) 
		{
			var output="";
			output=input.toUpperCase();
			return output;
		};
		return fn;
	});


app.filter("genderfilter",function()
	{
		var fn=function (input) 
		{
			var output="";
			if(input == "M")
			{
				output="Male";
			}

			if(input == "F")
			{
				output="Female";
			}
			return output;
		};
		return fn;
	});


app.controller("democontroller",function($scope)
	{
		$scope.e1={ename:"scott",gender:"M"};
		$scope.e2={ename:"Nancy",gender:"F"};
	});
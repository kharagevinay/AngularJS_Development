var app=angular.module("myApp",[]);
app.filter("rangefilter",function()
	{
		var f1=function (input,min,max) 
		{
			var output="";
			for(var i in input)
			{
				if(input[i].price >= min && input[i].price <= max)
				{
					output.push(input[i]);
				}
			}
			return output;
		};
		return f1;
	});


app.controller("democontroller",function($scope)
	{
		$scope.x=1000;
		$scope.y=10000;
		$scope.products=[
			{pname : "Mouse & Keyboard", brand : "HP", price : "1999"},
			{pname : "Printer", brand : "Canon", price : "9999"},
			{pname : "Laptop", brand : "Circle", price : "10000"},
			{pname : "Mobile", brand : "Moto", price : "999"}
		];
	});
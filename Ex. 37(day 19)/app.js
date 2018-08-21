var app=angular.module("myApp",[]);
app.controller("democontroller",function($scope)
	{
		$scope.uname="scott";
		$scope.students=[
			{sid : 1025, sname : "scott", course : "HTML"},
			{sid : 1026, sname : "smith", course : "CSS"},
			{sid : 1027, sname : "arun", course : "JS"},
			{sid : 1028, sname : "anand", course : "jQuery"}
		];
	});

app.directive("demoDirective",function()
	{
		var directobj={};
		directobj.restrict="EA";
		directobj.template="<h1>Welcome to {{uname}}</h1>";
		return directobj;
	});

app.directive("studentDetails",function()
{
	var directobj={};
	directobj.restrict="E";
	directobj.templateUrl="template1.html";
	return directobj;
});
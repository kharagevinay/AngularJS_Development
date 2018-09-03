var app=angular.module("myApp",["ngRoute"]);

app.controller("studentcontroller",function($scope)
	{
		$scope.students = [
			{sname : "scott", course : "HTML"},
			{sname : "ram" ,course : "CSS"},
			{sname : "amith" ,course : "jQuery"},
			{sname : "smith" ,course : "Angular JS"}
		];		
	});

app.controller("coursescontroller",function($scope)
	{
		$scope.courses=["HTML","CSS","jQuery","Angular JS"];
	});

app.config(function($routeProvider)
{
	$routeProvider
		.when("/home",
		{
			templateUrl : "home.html",
			controller : ""
		})
		.when("/students",
		{
			templateUrl : "students.html",
			controller : "studentcontroller"
		})
		.when("/courses",
		{
			templateUrl : "courses.html",
			controller : "coursescontroller"
		})
		.otherwise
		({
			redirectTo : "/home"
		});
		
});
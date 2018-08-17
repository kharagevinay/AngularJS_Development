var  app =  angular.module("myApp", []);
 
 app.factory("DeptService",  function()
 {
	 var obj =  {};
	 
	 obj.ar  = [];		// object data
	 
	 obj.getDepts   =   function()
	 {
		obj.ar  = [
		{deptno: 15, dname : "Accounts", loc : "Hyd"},
		{deptno: 25, dname : "Sales", loc : "Pune"}
		];
		
		return obj.ar;		 
	 };
	 
	 
	 obj.addDept  =  function(  deptObj   )
	 {
		obj.ar.push(deptObj);
	 };
	 
	 
	 obj.removeDept  = function(n )
	 {
		obj.ar.splice(n,  1);
	 };
	 
	 
	 return obj;
 });
 
  app.controller("DemoController", function($scope,  DeptService)
  {
		$scope.s1  = 0;
		$scope.s2  = "";
		$scope.s3  = "";  
	 	$scope.depts =   DeptService.getDepts();
				
		 
	$scope.f1  =  function()
	{	 
		var obj = {};
		obj.deptno  = $scope.s1;
		obj.dname  = $scope.s2;
		obj.loc  = $scope.s3;		
		DeptService.addDept(   obj );
	};	
	
	
	$scope.f2 = function(  x   )
	{	
		 DeptService.removeDept(x);
	}; 
				
 }); 
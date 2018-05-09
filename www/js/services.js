angular.module('app.services', [])
.factory('aluminum', [function(){
	var obj = {};
	obj.getUrl=function()
	{
		obj.str="http://merkatobebaeto.com/dagely/food/aluminum.php"; // pass the value to url
		return obj.str;
	};
	return obj;
}])

/////////////////////////////////////////////////////
.factory('bank', [function(){
	var obj = {};
	obj.str = "http://merkatobebaeto.com/dagely/food/bank.php?till=";
	obj.sort = "";
	obj.search = "";
	obj.category = "";
	obj.till=0;
	obj.getUrl=function(){
		
		obj.till=obj.till + 5;
		obj.str="http://merkatobebaeto.com/dagely/food/bank.php?till="+obj.till; // pass the value to url
		
		if(obj.sort!="" && obj.category!=""){
			obj.str= obj.str+"&category="+obj.category+"&sort="+obj.sort;
		}
		else if(obj.category!="" ){
			obj.str= obj.str+"&category="+obj.category;
		}
		else if(obj.sort!=""){  
			obj.str= obj.str+"&sort="+obj.sort;
		}
		console.log("URL",obj.str);
		return obj.str;
	};
	return obj;
}])

.service('BlankService', [function(){

}]);


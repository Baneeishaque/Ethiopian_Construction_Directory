angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('ethiopianConstractionDirectoriesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('categoryINDEXCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])



.controller('contactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])

.controller('ALUMINUM', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Aluminum.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('bank', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/bank.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('bitumen', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/bitumen.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('brickproduction', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/brickproduction.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('carimporter', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/carimporter.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('cementproduction', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/cementproduction.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Ceramic', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Ceramic.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('ChipWood', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/ChipWood.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('Cleaning', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Cleaning.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('communicationservice', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/communicationservice.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('ConstructionMachinery', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/ConstructionMachinery.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('ConstructionMaterial', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/ConstructionMaterial.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Consultancy', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Consultancy.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('conveconstructionTrainingCenterrtcsv', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/conveconstructionTrainingCenterrtcsv.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('construction', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/construction.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('door', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/door.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('ElectricMaterialImporter', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/ElectricMaterialImporter.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('ElectroMechanicalWork', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/ElectroMechanicalWork.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('fiberglasswork', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/fiberglasswork.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('FinishingWork', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/FinishingWork.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])



.controller('FloorWall', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/FloorWall.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Furniture', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Furniture.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Generator', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Generator.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('GlassWork', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/GlassWork.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('GypsumDécor', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/GypsumDécor.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Hotel', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Hotel.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Installation', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Installation.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])

.controller('Insurance', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Insurance.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('InteriorDesign', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/InteriorDesign.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('LiftImporter', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/LiftImporter.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('MarbleGraniteProduction', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/MarbleGraniteProduction.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('MetalWork', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/MetalWork.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('NailProduction', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/NailProduction.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('oilPetroleum', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/oilPetroleum.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Partition', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Partition.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('PipeFitting', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/PipeFitting.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('PlasticMaterial', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/PlasticMaterial.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('PVCCeiling', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/PVCCeiling.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('QuartzPaint', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/QuartzPaint.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('RealEstate', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/RealEstate.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('ReinforcementBar', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/ReinforcementBar.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('RoofTiles', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/RoofTiles.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('SafetyEquipments', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/SafetyEquipments.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('SandGravel', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/SandGravel.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Scaffolding', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Scaffolding.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])




.controller('SoilTestRelatedWorks', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/SoilTestRelatedWorks.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])



.controller('SparePart', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/SparePart.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('StoneArt', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/StoneArt.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('TimberImporter', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/TimberImporter.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('TourTravel', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/TourTravel.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Transport', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Transport.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('Tyre', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/Tyre.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('WaterProofing', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/WaterProofing.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('WaterPump', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/WaterPump.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])



.controller('WireProduction', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/WireProduction.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('WoodWork', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/WoodWork.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])


.controller('WaterWellDrilling', ['$scope', '$http', '$stateParams',

	 function($scope, $http, $stateParams) {
	  $http.get('js/JSON/WaterWellDrilling.json').success(function(data) {
      $scope.artists = data;
       	 //show product page
	$scope.showProductInfo=function (COMPANY,TELEPHONE,PRODUCT,MOBILE,FAX,POST,EMAIL,WEBSITE) {	 
		 sessionStorage.setItem('product_info_COMPANY', COMPANY);
		 sessionStorage.setItem('product_info_TELEPHONE', TELEPHONE);

		 sessionStorage.setItem('product_info_PRODUCT', PRODUCT);
		 sessionStorage.setItem('product_info_MOBILE', MOBILE);
		 sessionStorage.setItem('product_info_FAX', FAX);
		 sessionStorage.setItem('product_info_POST', POST);
		 sessionStorage.setItem('product_info_EMAIL', EMAIL);
		 sessionStorage.setItem('product_info_WEBSITE', WEBSITE);
		
		 window.location.href = "#/page13";
	 };
 })
}])




.controller('productPageCtrl', function($scope) {

	//onload event
	angular.element(document).ready(function () {
		
		$scope.COMPANY= sessionStorage.getItem('product_info_COMPANY');
		$scope.TELEPHONE= sessionStorage.getItem('product_info_TELEPHONE');
	
		$scope.PRODUCT= sessionStorage.getItem('product_info_PRODUCT');
		$scope.MOBILE= sessionStorage.getItem('product_info_MOBILE');
		$scope.FAX= sessionStorage.getItem('product_info_FAX');
		$scope.POST= sessionStorage.getItem('product_info_POST');
		$scope.EMAIL= sessionStorage.getItem('product_info_EMAIL');
		$scope.WEBSITE= sessionStorage.getItem('product_info_WEBSITE');

	});


})
 
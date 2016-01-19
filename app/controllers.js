'use strict';

/* Controllers */


var booksControllers = angular.module('booksControllers', []);	

booksControllers.controller('BooksList', function($scope, $routeParams, factoryBooks) {
	
	//$scope.books = factoryBooks.books();
	
	factoryBooks.books({'page': $routeParams.page, 'order': $routeParams.order, 'order_type': $routeParams.order_type, 'search_key': $routeParams.search_key}).$promise.then(function(data) {
		$scope.books = data.books;
		$scope.pagination = data.pagination;
		$scope.order = $routeParams.order;
		$scope.search_key = $routeParams.search_key;
		$scope.order_type = $routeParams.order_type;
		$scope.order_type_change = ($scope.order && $routeParams.order_type != 'DESC' ? 'DESC' : 'ASC');
	});
	
	//console.log($scope.books);
	
});

booksControllers.controller('BookDetail', function($scope, $routeParams, factoryBooks) {
	$scope.id = $routeParams.id;
	//$scope.book = books[$routeParams.id];
	$scope.book = factoryBooks.get({ id:$routeParams.id });

});

booksControllers.controller('BookEdit', function($scope, $routeParams, $location, factoryBooks, factoryFiles) {

	if($routeParams.id) $scope.book = factoryBooks.get({ id:$routeParams.id });
	
	$scope.max_year = new Date().getFullYear()
	
	$scope.add = function(){
		factoryBooks.add($scope.book).$promise.then(function(book) {
			//console.log(book);
			//$scope.book = book;
			/* ---------------------------------------------------- */
			var form_data = new FormData();
			form_data.append('file', $scope.cover);
			//console.log('Upload file:');
			//console.dir($scope.cover);
			factoryFiles.upload({id: book.id}, form_data);
			/* ---------------------------------------------------- */
			$location.path('/books/' + book.id);
		});
	}

	$scope.update = function(){
		factoryBooks.update({id: $routeParams.id}, $scope.book).$promise.then(function(book) {
			$scope.book = book;
			/* ---------------------------------------------------- */
			var form_data = new FormData();
			form_data.append('file', $scope.cover);
			//console.log('Upload file:');
			//console.dir($scope.cover);
			factoryFiles.upload({id: $routeParams.id}, form_data);
			/* ---------------------------------------------------- */
			$location.path('/books/' + $routeParams.id);
		});
	}
	
});

booksControllers.controller('BookRemove', function($scope, $routeParams, factoryBooks) {
	$scope.result = factoryBooks.remove({ id:$routeParams.id });
	$scope.message = 'Remove success';
});

/* ---------------------------------------------------- */
project.directive('fileModel', ['$parse', function ($parse) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;
			
			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
}]);
'use strict';

var serviceBase = '/BooksDirectorySimple/server/web/index.php';


var project = angular.module('project', [
	'ngRoute',
	'booksControllers',
	'booksServices',
	'fileServices',
]);

var booksServices = angular.module('booksServices', ['ngResource']);

booksServices.config(function($httpProvider) {
	$httpProvider.interceptors.push('myHttpInterceptor');
	/*
	$httpProvider.defaults.transformRequest.push(function (data, headersGetter) {
		$('#loading').show();
		console.log('loading show');
		return data;
	});
	$httpProvider.defaults.transformResponse.push(function (data, headersGetter, status) {
		$('#loading').hide();
		console.log('loading hide');
		return data;
	});
	*/
});

booksServices.factory('myHttpInterceptor', function($q) {
    return {
		'request': function(config) {
			$('#loading').show();
			return config;
		},
		'response': function(response) {
			$('#loading').hide();
			return response;
		},
    };
});


booksServices.factory('factoryBooks', ['$resource',
	function($resource){
		return $resource(serviceBase + '/books/:id', {'per-page': 9}, {
			//books: {method: 'GET', isArray: true},
			books: {method: 'GET', transformResponse: function(data, headers) {
			
				//console.log(data);
				var jsonData = {};
				jsonData.books = JSON.parse(data);
				jsonData.pagination = {};

				jsonData.pagination.totalCount = parseInt(headers()['x-pagination-total-count']);
				jsonData.pagination.perPage = parseInt(headers()['x-pagination-per-page']);
				jsonData.pagination.currentPage = parseInt(headers()['x-pagination-current-page']);
				jsonData.pagination.pageCount = parseInt(headers()['x-pagination-page-count']);
				
				//console.log(headers());
				//console.log(jsonData.pagination);
				return jsonData;
			}},
			book: {method: 'GET'},
			add: {method: 'POST'},
			update: {method: 'PUT'},
		});
}]);

var fileServices = angular.module('fileServices', ['ngResource']);

fileServices.factory('factoryFiles', ['$resource',
	function($resource){
		return $resource(serviceBase + '/books/upload', {}, {
			upload: {
				method: 'POST',  
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined},
				isArray: true,
			},
		});
}]);

project.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/books', {
			templateUrl: 'app/views/list.html',
			controller: 'BooksList'
		}).
		when('/books/edit/:id', {
			templateUrl: 'app/views/edit.html', 
			controller: 'BookEdit'
		}).
		when('/books/add', {
			templateUrl: 'app/views/edit.html', 
			controller: 'BookEdit'
		}).
		when('/books/remove/:id', {
			templateUrl: 'app/views/message.html', 
			controller: 'BookRemove'
		}).
		when('/books/:id', {
			templateUrl: 'app/views/detail.html', 
			controller: 'BookDetail'
		}).
		otherwise({
			redirectTo: '/books'
		});
}]);

project.directive('validfilesize', function() {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ngModel) {
			var maxSize = parseInt(attrs.validfilesize);
			ngModel.$validators.validfilesize = function(value) {
				return (!value || parseInt(value) < maxSize);
            }
		}
	};
});

project.directive('validfileext', function() {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ngModel) {
			var validFormats = attrs.validfileext.split(',');
			ngModel.$validators.validfileext = function(value) {  
				var valid = undefined;
				if (!value) valid = true;
				else valid = (validFormats.indexOf(value.substring(value.lastIndexOf('.') + 1).toLowerCase()) !== -1);
				return valid;
            }
		}
	};
});
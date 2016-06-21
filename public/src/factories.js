angular.module('DashApp')
.factory('loanee', function($resource) {
	return $resource('/api/loanee/:id', {id: '@id'}, {
		'update': {method: 'PUT'}
	});
});
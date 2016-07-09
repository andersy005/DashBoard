angular.module('DashApp')
    .factory('Loanee', function($resource) {
        return $resource('/api/loanee/:id', {
            id: '@id'
        }, {
            'update': {
                method: 'PUT'
            }
        });
    })

.factory('Fields', function($q, $http, Loanee) {
    var url = '/options/displayed_field',
        ignore = ['firstName', 'lastName', 'id', 'userId'],
        allFields = [],
        deferred = $q.defer(),

        loanees = Loanee.query(function() {
            loanees.forEach(function(c) {
                Object.keys(c).forEach(function(k) {
                    if (allFields.indexOf(k) < 0 && ignore.indexOf(k) < 0) allFields.push(k);
                });
            });

            deferred.resolve(allFields);
        });

    return {
        get: function() {
            return $http.get(url);
        },

        set: function(newFields) {
            return $http.post(url, {
                fields: newFields
            });
        },

        headers: function() {
            return deferred.promise;
        }
    };
});
